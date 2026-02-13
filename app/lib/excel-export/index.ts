import ExcelJS from "exceljs";
import { type SurveyData } from "@/app/models/session";
import { exportToEbird } from "./ebird";
export function exportToExcel(surveyData: SurveyData) {
  const workbook = new ExcelJS.Workbook();
  // exportToEbird(workbook.addWorksheet("Ebird"), surveyData);
  exportToEbird({
    addRow: (...args) => console.log(args.join(", "))
  }, surveyData);
}
