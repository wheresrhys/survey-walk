import { sectors } from "@/app/models/sectors";
import { SurveyData } from "@/app/models/session";
import { Sector } from "@/app/models/sectors";

export function tallyUp( surveyData: SurveyData, sectorFilter: (sector: Sector) => boolean) {
  const sectorsToTally = sectors.filter(sectorFilter);
  const tally = sectorsToTally.reduce((acc, sector) => {
    const sectorData = surveyData.sectors[sector.id];
    const birds = Object.keys(sectorData.birds);
    birds.forEach(bird => {
      acc[bird] = (acc[bird] || 0) + sectorData.birds[bird].count;
    });
    return acc;
  }, {} as Record<string, number>);
  return tally;
}
