import { SurveyData } from "@/app/models/session";
import { format as formatDate } from "date-fns";
import { tallyUp, type Tally } from "./tally-up";
import { sectors } from "@/app/models/sectors";
import { birds } from "@/app/models/birds";
import ExcelJS from "exceljs";
import type { Bird } from "@/app/models/birds";
import type { Sector } from "@/app/models/sectors";

function createTallyRow(
  tally: Tally,
  bird: Bird,
  sectorsToTally: Sector[],
  surveyData: SurveyData,
) {
  return [
    tally[bird.shortName].count,
    bird.lvrpaName,
    ...sectorsToTally.map(
      (sector) => surveyData.sectors[sector.id].birds[bird.shortName].count,
    ),
    tally[bird.shortName].comments,
    tally[bird.shortName].breedingCodes.join(", "),
  ];
}

export function exportToLvrpa(
  worksheet: ExcelJS.Worksheet,
  surveyData: SurveyData,
  parentArea: "Fields" | "Waterworks",
) {
  console.log(surveyData.weather);
  const sectorsToTally = sectors.filter(
    (sector) => sector.parentArea === parentArea,
  );
  const tally = tallyUp(
    surveyData,
    (sector) => sector.parentArea === parentArea,
  );

  worksheet.addRow(["", "Lee Valley Park London Bird Survey, standard walk"]);
  worksheet.addRow([
    "Site",
    "",
    parentArea === "Fields"
      ? "Waterworks Fields (ex Pitch n Putt Meadow)"
      : "Waterworks NR",
    "",
    "",
    "Recorder:",
    "Rhys Evans",
  ]);
  worksheet.addRow([""]);
  worksheet.addRow([
    "",
    "Date",
    "Start Time",
    "End Time",
    "Temp (°C)",
    "Wind (0-4)",
    "Rain (0-5)",
    "Cloud",
    "Ice (%)",
    "Snow (%)",
  ]);
  worksheet.addRow([
    "",
    formatDate(surveyData.createdTimestamp, "dd MMM yyyy"),
    formatDate(
      surveyData.sectors[sectorsToTally[0].id].startTime as Date,
      "HH:mm",
    ),
    formatDate(
      surveyData.sectors[sectorsToTally[sectorsToTally.length - 1].id]
        .startTime as Date,
      "HH:mm",
    ),
    surveyData.weather.temperature,
    surveyData.weather.windSpeed,
    surveyData.weather.rain,
    surveyData.weather.cloudCover,
    surveyData.weather.icePct,
    surveyData.weather.snowCoverPct,
  ]);
  worksheet.addRow([""]);
  worksheet.addRow([
    "",
    "Enter the number of each species detected in each section of the walk",
  ]);
  worksheet.addRow(["", "", "SECTIONS"]);

  worksheet.addRow([
    "Total",
    "Species",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "Notes",
    "Breeding code",
  ]);

  birds.forEach((bird) => {
    if (tally[bird.shortName].count > 0) {
      worksheet.addRow(createTallyRow(tally, bird, sectorsToTally, surveyData));
    }
  });
  Object.entries(tally).forEach(([birdName, birdTally]) => {
    if (!birds.find((bird) => bird.shortName === birdName)) {
      worksheet.addRow(
        createTallyRow(
          tally,
          { shortName: birdName, lvrpaName: birdName, ebirdName: birdName },
          sectorsToTally,
          surveyData,
        ),
      );
    }
  });
}
