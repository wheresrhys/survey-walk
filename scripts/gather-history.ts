// @ts-nocheck
import { google } from "googleapis";
import * as dotenv from "dotenv";
import { createObjectCsvWriter, createObjectCsvStringifier } from "csv-writer";
import * as csvParser from "csv-parser";
import * as fs from "fs";
import { exit } from "process";
import { pRateLimit } from 'p-ratelimit';       // TypeScript

// create a rate limiter that allows up to 30 API calls per second,
// with max concurrency of 10
const rateLimit = pRateLimit({
  interval: 1000 * 60,             // 1000 ms == 1 second
  rate: 30,                   // 30 API calls per interval
  concurrency: 2,            // no more than 10 running at once
  // maxDelay: 4000              // an API call delayed > 2 sec is rejected
});
let inFlight = 0;
const limit = async (func: () => Promise<unknown>) => {
  try {
    return await rateLimit(func);
  } catch (err) {
    console.log('retrying')
    return await rateLimit(func);
  }
};
// Load environment variables
dotenv.config();

const dodgySheetNameMappings: Record<string, [string, string]> = {
  // "Waterworks 2022-08": ["Sheet1", "wwks"]
};

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/spreadsheets.readonly'];
const FOLDER_PATH = "Birds/Waterworks";
const FILE_NAME_PATTERN = /^Waterworks \d{4}-\d{2}$/i;
const OUTPUT_FILE = "historical-data.csv";

const auth = new google.auth.GoogleAuth({
  scopes: SCOPES,
});

// Helper to log and skip errors
const logAndSkip = (message: string) => {
  console.error(`[SKIP] ${message}`);
};

// Set up CSV writer with headers
const csvWriter = createObjectCsvWriter({
  path: OUTPUT_FILE,
  header: [
    { id: "month", title: "month" },
    { id: "parentArea", title: "parentArea" },
    { id: "sector", title: "sector" },
    { id: "species", title: "species" },
    { id: "count", title: "count" },
  ],
  append: false, // Set to true if you want to append data to an existing file
});

const csvStringifier = createObjectCsvStringifier({
  header: [
    { id: "month", title: "month" },
    { id: "parentArea", title: "parentArea" },
    { id: "sector", title: "sector" },
    { id: "species", title: "species" },
    { id: "count", title: "count" },
  ],
});


// Function to read existing historical-data.csv and extract unique yyyy-MM values from the month column
async function getExistingMonths(): Promise<string[]> {
  return [];
  const filePath = OUTPUT_FILE; // Path to historical-data.csv
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      console.log("historical-data.csv does not exist. Returning an empty list.");
      resolve([]); // If the file doesn't exist, return an empty array
      return;
    }

    const monthsSet = new Set<string>();

    // Read the CSV file and parse it
    fs.createReadStream(filePath)
      .pipe(csvParser.default())
      .on("data", (row) => {
        const month = row["month"]; // Access the "month" column
        if (month) monthsSet.add(month); // Add only if "month" is non-empty
      })
      .on("end", () => {
        resolve([...monthsSet]); // Convert the Set to an array and resolve it
      })
      .on("error", (err) => {
        reject(`Error reading the CSV file: ${err.message}`);
      });
  });
}

// Function to extract and process Google Sheets data
async function processFiles() {
  const drive = google.drive({ version: "v3", auth: await auth.getClient() });
  const sheetsApi = google.sheets({ version: "v4", auth: await auth.getClient() });

  const fileStream = fs.createWriteStream(OUTPUT_FILE);
  fileStream.write(csvStringifier.getHeaderString()); // Write the CSV header as the first line

  try {
    // Search for the specified folder
    const folderRes = await limit(() => drive.files.list({
      q: `name = '${FOLDER_PATH.split('/').pop()}' and mimeType = 'application/vnd.google-apps.folder'`,
      fields: "files(id)",
    }));
    const folder = folderRes.data.files?.[0];
    if (!folder) throw new Error(`Folder ${FOLDER_PATH} not found`);

    // List all files matching the pattern within the folder
    const filesRes = await limit(() => drive.files.list({
      q: `'${folder.id}' in parents and name contains 'Waterworks' and mimeType = 'application/vnd.google-apps.spreadsheet'`,
      fields: "files(id, name)",
    }));

    const files = filesRes.data.files || [];
    let dataToWrite: Array<Record<string, any>> = [];

    const existingMonths = await getExistingMonths();

    for (const file of files) {
      const fileName = file.name;
      console.log('Processing', fileName)

      // console.log('yay')
      if (!FILE_NAME_PATTERN.test(fileName)) {
        logAndSkip(`Invalid file name pattern for ${fileName}`);
        continue;
      }

      // Extract the file's month
      const fileMonth = fileName.match(/\d{4}-\d{2}/)?.[0];
      if (!fileMonth) {
        logAndSkip(`Could not extract month from file name ${fileName}`);
        continue;
      }

      if (existingMonths.includes(fileMonth)) {
        logAndSkip(`Month ${fileMonth} already exists in the CSV file. Skipping file ${fileName}`);
        continue;
      }

      // Get sheet info for the file
      const sheetRes = await limit(() => sheetsApi.spreadsheets.get({ spreadsheetId: file.id }));
      const sheets = sheetRes.data.sheets || [];

      const dodgySheetNames = dodgySheetNameMappings[fileName] || null;

      // Identify sheets by their prefix (case-insensitive)
      const fieldSheet = dodgySheetNames ? sheets.find((sheet) => sheet.properties?.title === dodgySheetNames[0]) : sheets.find((sheet) => sheet.properties?.title?.toLowerCase().includes("fields"));
      const waterworksSheet = dodgySheetNames ? sheets.find((sheet) => sheet.properties?.title === dodgySheetNames[1]) : sheets.find((sheet) => !sheet.properties?.title?.toLowerCase().includes("fields"));

      if (!fieldSheet || !waterworksSheet) {
        logAndSkip(`Missing required sheets (fields/waterworks) in file ${fileName}`);
        console.log(sheets.map(sheet => sheet.properties?.title?.toLowerCase()).join(", "));
        continue;
      }
      console.log('Processing sheets for', fileName)
      // Process each sheet
      for (const [sheet, parentArea, columnRange] of [
        [fieldSheet, "fields", { start: "C", end: "H" }],
        [waterworksSheet, "waterworks", { start: "C", end: "J" }],
      ] as const) {
        try {

          const maxRow = Math.min(sheet.properties?.gridProperties?.rowCount || 100, 100)

          const sheetName = sheet.properties?.title!;
          const dataRes = await limit(() => sheetsApi.spreadsheets.values.get({
            spreadsheetId: file.id,
            range: `'${sheetName}'!B10:${columnRange.end}${maxRow}`, // Read the defined headers and data
          }));
          if (fileName === 'Waterworks 2025-01') {
            console.log(maxRow, sheet)
          }
          const rows = dataRes.data.values || [];
          const headersRow = rows.shift();
          if (!headersRow || headersRow.length === 0) {
            logAndSkip(`Empty or missing headers in sheet ${sheetName} of file ${fileName}`);
            continue;
          }
          console.log(`Processing ${rows.length} rows for`, fileName, sheetName)
          // Process rows row 11 onward
          rows.forEach((row, rowIndex) => {
            const species = row[0];
            if (!species) return; // Skip empty species rows
            if (species === '#REF!') return;

            for (let colIndex = 1; colIndex < row.length; colIndex++) {
              const count = row[colIndex];
              if (count) {
                const sector = colIndex; // Sector = 1-based numbered columns
                // dataToWrite.push({
                //   month: fileMonth,
                //   parentArea,
                //   sector,
                //   species,
                //   count: Number(count), // Ensure count is a number
                // });
                // Write to the file stream incrementally
                fileStream.write(
                  csvStringifier.stringifyRecords([
                    {
                      month: fileMonth,
                      monthOfYear: fileMonth.split('-')[1],
                      parentArea,
                      sector,
                      globalSector: `${parentArea}-${sector}`,
                      species,
                      count: Number(count), // Ensure count is a number
                    },
                  ])
                );
              }
            }
          });
        } catch (err) {
          logAndSkip(`Error processing sheet ${sheet.properties?.title} in file ${fileName}: ${err.message}`);
        }
      }
    }

    // Write all collected data to CSV
    // await csvWriter.writeRecords(dataToWrite);
    console.log("All data has been written to the CSV file successfully.");
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

processFiles().catch((err) => console.error(`Fatal error: ${err.message}`));
