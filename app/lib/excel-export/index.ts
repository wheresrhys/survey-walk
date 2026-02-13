import ExcelJS from "exceljs";
import { type SiteSurveyData } from "@/app/models/survey";
import { exportToEbird } from "./ebird";
import { exportToLvrpa } from "./lvrpa";

// const mockWorksheet = {
//   // @ts-expect-error this is just a test implementation
//   addRow: (...args) => {
//     console.log(args.join(", "));
//   },
// };

export function exportToExcel(
  surveyData: SiteSurveyData,
  type: "ebird" | "lvrpa" | "stats",
  fileFormat: "xlsx" | "csv" = "xlsx",
) {
  const workbook = new ExcelJS.Workbook();
  if (type === "ebird") {
    exportToEbird(workbook.addWorksheet("Ebird"), surveyData, {
      includeComments: true,
      includeAllBirds: false,
    });
  } else if (type === "stats") {
    exportToEbird(workbook.addWorksheet("Ebird - no text"), surveyData, {
      includeComments: false,
      includeAllBirds: true,
    });
  } else if (type === "lvrpa") {
    exportToLvrpa(workbook.addWorksheet("Fields"), surveyData, "Fields");
    exportToLvrpa(
      workbook.addWorksheet("Waterworks"),
      surveyData,
      "Waterworks",
    );
  }

  workbook[fileFormat].writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `survey-data.${type}.${fileFormat}`;
    document.body.appendChild(a);
    a.click();
  });
}
