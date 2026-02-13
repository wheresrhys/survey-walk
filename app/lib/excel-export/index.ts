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

export function exportToExcel(surveyData: SiteSurveyData) {
  const workbook = new ExcelJS.Workbook();
  exportToEbird(workbook.addWorksheet("Ebird"), surveyData, true);
  exportToEbird(workbook.addWorksheet("Ebird - no text"), surveyData, false);
  exportToLvrpa(workbook.addWorksheet("Fields"), surveyData, "Fields");
  exportToLvrpa(workbook.addWorksheet("Waterworks"), surveyData, "Waterworks");
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "survey-data.xlsx";
    document.body.appendChild(a);
    a.click();
  });
}
