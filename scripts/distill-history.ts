import * as csvParser from "csv-parser";
import * as fs from "fs";
const OUTPUT_FILE = "historical-data.csv";

const sectorsSet: Set<string> = new Set();
const monthFrequency: Record<string, Set<string>> = {};

type Row = {
  month: string;
  parentArea: string;
  sector: string;
  species: string;
  count: number;
};

type MonthLeafNode = {
  total: number;
  years: Set<string>;
  totalYears: number;
} & Record<string, number>;

type SpeciesNode = Record<string, MonthLeafNode>;

type SpeciesMap = Record<string, SpeciesNode>;

// Function to read existing historical-data.csv and extract unique yyyy-MM values from the month column
async function distillSpeciesFrequency(): Promise<SpeciesMap> {
  const filePath = OUTPUT_FILE; // Path to historical-data.csv
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      console.log(
        "historical-data.csv does not exist. Returning an empty list.",
      );
      resolve({} as SpeciesMap); // If the file doesn't exist, return an empty array
      return;
    }

    const speciesMap: SpeciesMap = {};

    // Read the CSV file and parse it
    fs.createReadStream(filePath)
      .pipe(csvParser.default())
      .on("data", (row: Row) => {
        const { month, parentArea, sector, species, count } = row;
        const [year, monthOfYear] = month.split("-");
        monthFrequency[monthOfYear] = monthFrequency[monthOfYear] || new Set();
        monthFrequency[monthOfYear].add(year);
        const globalSector = `${parentArea}-${sector}`;
        sectorsSet.add(globalSector);
        speciesMap[species] = speciesMap[species] || {};

        speciesMap[species][monthOfYear] = speciesMap[species][monthOfYear] || {
          total: 0,
          years: new Set<string>(),
          totalYears: 0,
        };
        speciesMap[species][monthOfYear].years.add(year);
        speciesMap[species][monthOfYear].total++;
        speciesMap[species][monthOfYear].totalYears = [
          ...speciesMap[species][monthOfYear].years,
        ].length;
        speciesMap[species][monthOfYear][globalSector] =
          speciesMap[species][monthOfYear][globalSector] || 0;

        speciesMap[species][monthOfYear][globalSector]++;
      })
      .on("end", () => {
        resolve(speciesMap); // Convert the Set to an array and resolve it
      })
      .on("error", (err) => {
        reject(`Error reading the CSV file: ${err.message}`);
      });
  });
}

const frequencyDistilled: SpeciesMap = await distillSpeciesFrequency();

fs.writeFileSync("app/data/frequency-distilled.json", JSON.stringify(frequencyDistilled, null, 2));

fs.writeFileSync("app/data/month-frequency.json", JSON.stringify(
  Object.fromEntries(Object.entries(monthFrequency).map(([month, years]) => ([month, years.size]))),
  null, 2));

const sectorsArray = [...sectorsSet].sort();

type SpeciesFilter = ([species, data]: [string, SpeciesNode]) => boolean;

function getTopBirds(sector: string, month: string): Set<string> {
  const nextMonth = String((Number(month) % 12) + 1).padStart(2, "0");
  const prevMonth = String(((Number(month) + 10) % 12) + 1).padStart(2, "0");
  const dataToFilter = Object.entries(frequencyDistilled);
  const topBirds = new Set<string>();
  const filters: SpeciesFilter[] = [
    // Birds seen in every year in this sector;
    ([species, data]) =>
      data[month]?.[sector] === [...monthFrequency[month]].length,
    // Birds seen in most years in this sector
    ([species, data]) =>
      data[month]?.[sector] + 1 >= [...monthFrequency[month]].length,
    // Birds seen next month in this sector
    ([species, data]) =>
      data[nextMonth]?.[sector] >= [...monthFrequency[nextMonth]].length,
    // Birds seen prev month in this sector
    ([species, data]) =>
      data[prevMonth]?.[sector] >= [...monthFrequency[prevMonth]].length,
  ];
  let i = 0;
  while (topBirds.size < 24 && i < filters.length) {
    dataToFilter
      .filter(filters[i])
      .forEach(([species]) => topBirds.add(species));
    i++;
  }

  return topBirds;
}

export function getPriorityBirdsMap(month: number) {
  const monthAsString = String(month).padStart(2, "0");
  return Object.fromEntries(
    sectorsArray.map((sectorId) => [
      sectorId,
      getTopBirds(sectorId, monthAsString),
    ]),
  );
}

// sector + month?
