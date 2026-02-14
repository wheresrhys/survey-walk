import { SiteSurveyData } from "@/app/models/survey";
import { format as formatDate } from "date-fns";
import { tallyUp, type BirdTally } from "../tally-up";
import { sectorsList } from "@/app/data/sectors-gazetteer";
import { birdsList, type BirdMetadata } from "@/app/data/bird-taxonomy";
import ExcelJS from "exceljs";

function stringifyTally(tally: BirdTally, withComments: boolean) {
  return `${tally.count}${tally.comments && withComments ? `|${tally.comments}` : ""}`;
}

export function exportToEbird(
  worksheet: ExcelJS.Worksheet,
  surveyData: SiteSurveyData,
  options: {
    includeComments: boolean;
    includeAllBirds: boolean;
  },
) {
  const tally = tallyUp(surveyData, (sector) => true);
  const startTime =
    surveyData.sectors[sectorsList[0].id].startTime || new Date();
  const endTime =
    surveyData.sectors[sectorsList[sectorsList.length - 1].id].lastEditTime ||
    new Date();
  const duration = ((endTime.getTime() - startTime.getTime()) / 60000).toFixed(
    0,
  );
  worksheet.addRow(["", "", "Waterworks NR"]);
  worksheet.addRow(["Latitude", "", 51.563093]);
  worksheet.addRow(["Longitude", "", -0.037047]);
  worksheet.addRow(["Date", "", formatDate(startTime, "MM/dd/yyyy")]);
  worksheet.addRow(["Start Time", "", formatDate(startTime, "HH:mm")]);
  worksheet.addRow(["State", "", "UK"]);
  worksheet.addRow(["Country", "", "UK"]);
  worksheet.addRow(["Protocol", "", "Traveling"]);
  worksheet.addRow(["Num Observers", "", 1]);
  worksheet.addRow(["Duration(min)", "", duration]);
  worksheet.addRow(["All Obs Reported(Y / N)", "", "Y"]);
  worksheet.addRow(["Dist Traveled(Miles)", "", 2.3]);
  worksheet.addRow(["Area Covered(Acres)", "", ""]);
  worksheet.addRow([
    "Notes",
    "",
    "Monthly survey for LVRPA, covering Waterworks reserve and adjacent field",
  ]);

  birdsList.forEach((bird) => {
    if (options.includeAllBirds || tally[bird.shortName].count > 0) {
      worksheet.addRow([
        bird.ebirdName,
        "",
        stringifyTally(tally[bird.shortName], options.includeComments),
      ]);
    }
  });
  Object.entries(tally).forEach(([birdName, tally]) => {
    if (!birdsList.find((bird: BirdMetadata) => bird.shortName === birdName)) {
      worksheet.addRow([
        birdName,
        "",
        stringifyTally(tally, options.includeComments),
      ]);
    }
  });
}
