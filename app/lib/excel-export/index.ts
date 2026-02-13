import ExcelJS from "exceljs";
import { type SiteSurveyData } from "@/app/models/survey";
import { exportToEbird } from "./ebird";
import { exportToLvrpa } from "./lvrpa";

const mockWorksheet = {
  // @ts-expect-error this is just a test implementation
  addRow: (...args) => {
    console.log(args.join(", "));
  },
};
export function exportToExcel(surveyData: SiteSurveyData) {
  const workbook = new ExcelJS.Workbook();
  // exportToEbird(workbook.addWorksheet("Ebird"), surveyData);
  exportToEbird(mockWorksheet as ExcelJS.Worksheet, surveyData, true);
  exportToEbird(mockWorksheet as ExcelJS.Worksheet, surveyData, false);
  exportToLvrpa(mockWorksheet as ExcelJS.Worksheet, surveyData, "Fields");
  exportToLvrpa(mockWorksheet as ExcelJS.Worksheet, surveyData, "Waterworks");
}
