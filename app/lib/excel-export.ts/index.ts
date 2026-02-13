import ExcelJS from "exceljs";

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
