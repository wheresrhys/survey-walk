import { sectors } from "@/app/data/sectors-gazetteer";
import type {
  SiteSurveyData,
  BirdSurveyData,
  BreedingCode,
} from "@/app/models/survey";
import type { SectorMetadata } from "@/app/data/sectors-gazetteer";

export type BirdTally = {
  count: number;
  breedingCodes: BreedingCode[];
  comments: string;
};

export type Tally = Record<string, BirdTally>;

function stringifyBirdMetadata(birdData: BirdSurveyData): string {
  return [
    birdData.notes,
    ...birdData.broods.map(({ count, age }) => `${count} ${age}s`),
  ]
    .filter((record) => Boolean(record))
    .join(", ");
}

export function tallyUp(
  surveyData: SiteSurveyData,
  sectorFilter: (sector: SectorMetadata) => boolean,
): Tally {
  const sectorsToTally = sectors.filter(sectorFilter);
  const tally = sectorsToTally.reduce(
    (acc, sector) => {
      const sectorData = surveyData.sectors[sector.id];
      const birds = Object.keys(sectorData.birds);
      birds.forEach((bird) => {
        acc[bird] = acc[bird] || [];
        acc[bird].push(sectorData.birds[bird]);
      });
      return acc;
    },
    {} as Record<string, BirdSurveyData[]>,
  );

  const processedTally = {} as Record<
    string,
    { count: number; comments: string[]; breedingCodes: BreedingCode[] }
  >;
  Object.entries(tally).forEach(([bird, birdData]) => {
    processedTally[bird] = birdData.reduce(
      (acc, birdData) => {
        acc.count += birdData.count;
        acc.comments.push(stringifyBirdMetadata(birdData));
        acc.breedingCodes = [...acc.breedingCodes, ...birdData.breedingCodes];
        return acc;
      },
      {
        count: 0,
        comments: [] as string[],
        breedingCodes: [] as BreedingCode[],
      },
    );
  });

  const finalTally = {} as Tally;

  Object.keys(processedTally).forEach((key) => {
    finalTally[key] = {
      ...processedTally[key],
      comments: processedTally[key].comments
        .filter((comment) => Boolean(comment))
        .join("; "),
    };
  });
  return finalTally;
}
