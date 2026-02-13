import { SurveyData } from "@/app/models/session";
import { format as formatDate } from "date-fns";
import { tallyUp, type BirdTally } from "./tally-up";
import { sectors } from "@/app/models/sectors";
import {birds} from "@/app/models/birds";
import ExcelJS from "exceljs";

function stringifyTally ( tally: BirdTally, withComments: boolean ) {
	return `${tally.count}${tally.comments && withComments ? `|${tally.comments}` : ''}`
}

export function exportToEbird(worksheet: ExcelJS.Worksheet, surveyData: SurveyData, withComments: boolean) {
	const tally = tallyUp(surveyData, (sector) => true);
	const startTime = surveyData.sectors[sectors[0].id].startTime as Date;
	const endTime = surveyData.sectors[sectors[sectors.length - 1].id].startTime as Date;
	// const duration = ((endTime?.getTime() - startTime?.getTime()) / 60000).toFixed(0) + 15;
	worksheet.addRow(['', '', 'Waterworks NR']);
	worksheet.addRow(['Latitude', '', 51.563093]);
	worksheet.addRow(['Longitude', '', -0.037047]);
	worksheet.addRow(['Date', '', formatDate(startTime, 'MM/dd/yyyy')]);
	worksheet.addRow(['Start Time', '', formatDate(startTime, 'HH:mm')]);
	worksheet.addRow(['State', '', 'UK']);
	worksheet.addRow(['Country', '', 'UK']);
	worksheet.addRow(['Protocol', '', 'Traveling']);
	worksheet.addRow(['Num Observers', '', 1]);
	worksheet.addRow(['Duration(min)', '', 200000000]);
	worksheet.addRow(['All Obs Reported(Y / N)', '', 'Y']);
	worksheet.addRow(['Dist Traveled(Miles)', '', 2.3]);
	worksheet.addRow(['Area Covered(Acres)', '', '']);
	worksheet.addRow(['Notes', '', 'Monthly survey for LVRPA, covering Waterworks reserve and adjacent field']);

	birds.forEach(bird => {
		if (tally[bird.shortName].count > 0) {
			worksheet.addRow([bird.ebirdName, '', stringifyTally(tally[bird.shortName], withComments)]);
		}
	});
	Object.entries(tally).forEach(([birdName, tally]) => {
		if (!birds.find(bird => bird.shortName === birdName)) {
			worksheet.addRow([birdName, '', stringifyTally(tally, withComments)]);
		}
	});
}
