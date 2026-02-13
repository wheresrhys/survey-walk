import ExcelJS from "exceljs";
import { type SurveyData } from "@/app/models/session";
import { exportToEbird } from "./ebird";
import { exportToLvrpa } from "./lvrpa";

const mockWorksheet = {
  // @ts-expect-error
  addRow: (...args) => {
    console.log(args.join(", "));
  },
};
export function exportToExcel(surveyData: SurveyData) {
  const workbook = new ExcelJS.Workbook();
  // exportToEbird(workbook.addWorksheet("Ebird"), surveyData);
  exportToEbird(mockWorksheet as ExcelJS.worksheet, surveyData, true);
  exportToEbird(mockWorksheet as ExcelJS.worksheet, surveyData, false);
  exportToLvrpa(mockWorksheet as ExcelJS.worksheet, surveyData, "Fields");
  exportToLvrpa(mockWorksheet as ExcelJS.worksheet, surveyData, "Waterworks");
}
