import { SiteSurveyData } from "@/app/models/survey";
import { format as formatDate } from "date-fns";
import { tallyUp, type GlobalBirdTally } from "../tally-up";
import { sectorsList } from "@/app/data/sectors-gazetteer";
import { birdsList } from "@/app/data/bird-taxonomy";
import ExcelJS from "exceljs";
import type { BirdMetadata } from "@/app/data/bird-taxonomy";
import type { SectorMetadata } from "@/app/data/sectors-gazetteer";

function createTallyRow(
  tally: GlobalBirdTally,
  bird: BirdMetadata,
  sectorsToTally: SectorMetadata[],
  surveyData: SiteSurveyData,
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
  surveyData: SiteSurveyData,
  parentArea: "Fields" | "Waterworks",
) {
  const sectorsToTally = sectorsList.filter(
    (sector) => sector.parentArea === parentArea,
  );
  const tally = tallyUp(
    surveyData,
    (sector: SectorMetadata) => sector.parentArea === parentArea,
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
    formatDate(surveyData.createdTime, "dd MMM yyyy"),
    formatDate(
      surveyData.sectors[sectorsToTally[0].id].startTime as Date,
      "HH:mm",
    ),
    formatDate(
      surveyData.sectors[sectorsToTally[sectorsToTally.length - 1].id]
        .lastEditTime as Date,
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
    ...sectorsToTally.map((sector, index) => index + 1),
    "Notes",
    "Breeding code",
  ]);

  birdsList.forEach((bird: BirdMetadata) => {
    if (tally[bird.shortName].count > 0) {
      worksheet.addRow(createTallyRow(tally, bird, sectorsToTally, surveyData));
    }
  });
  Object.entries(tally).forEach(([birdName]) => {
    if (!birdsList.find((bird: BirdMetadata) => bird.shortName === birdName)) {
      worksheet.addRow(
        createTallyRow(
          tally,
          {
            shortName: birdName,
            lvrpaName: birdName,
            ebirdName: birdName,
          } as BirdMetadata,
          sectorsToTally,
          surveyData,
        ),
      );
    }
  });
}
