import ExcelJS from "exceljs";
import { type SurveyData } from "@/app/models/session";
export function exportToExcel(surveyData: SurveyData) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Survey Data");
  worksheet.columns = [
    { header: "Bird", key: "bird" },
    { header: "Count", key: "count" },
    { header: "Notes", key: "notes" },
    { header: "Broods", key: "broods" },
    { header: "Breeding Codes", key: "breedingCodes" },
  ];
}
