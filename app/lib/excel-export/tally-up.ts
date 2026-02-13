import { sectors } from "@/app/models/sectors";
import type { SurveyData, BirdData } from "@/app/models/session";
import type { Sector } from "@/app/models/sectors";
import type { BreedingCode } from "@/app/models/breeding";


export type BirdTally = {
  count: number;
  breedingCodes: BreedingCode[];
  comments: string;
}

type Tally = Record<string, BirdTally>;

function stringifyBirdMetadata(birdData: BirdData): string {
  return [birdData.notes, ...birdData.broods.map(({count, age}) => `${count} ${age}s` )].filter(record => Boolean(record)).join(', ')
}

export function tallyUp( surveyData: SurveyData, sectorFilter: (sector: Sector) => boolean): Tally {
  const sectorsToTally = sectors.filter(sectorFilter);
  const tally = sectorsToTally.reduce((acc, sector) => {
    const sectorData = surveyData.sectors[sector.id];
    const birds = Object.keys(sectorData.birds);
    birds.forEach(bird => {
      acc[bird] = acc[bird] || []
      acc[bird].push(sectorData.birds[bird]);
    });
    return acc;
  }, {} as Record<string, BirdData[]>);

  const processedTally = {} as Record<string, { count: number, comments: string[], breedingCodes: BreedingCode[] }>;
  Object.entries(tally).forEach(([bird, birdData]) => {
    processedTally[bird] = birdData.reduce((acc, birdData) => {
      acc.count += birdData.count;
      acc.comments.push(stringifyBirdMetadata(birdData));
      acc.breedingCodes = [...acc.breedingCodes, ...birdData.breedingCodes]
      return acc;
    }, { count: 0, comments: [] as string[], breedingCodes: [] as BreedingCode[] });
  }) ;

  const finalTally = {} as Tally

  Object.keys(processedTally).forEach(key => {
    finalTally[key] = {...processedTally[key], comments: processedTally[key].comments.filter(comment => Boolean(comment)).join('; ')}
  })
  return finalTally;
}
