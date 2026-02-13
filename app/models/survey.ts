"use client";
import { sectorsList } from "@/app/data/sectors-gazetteer";
import { birdsList } from "@/app/data/bird-taxonomy";
import type { BirdMetadata } from "@/app/data/bird-taxonomy";

export type BroodAge = "chick" | "fledgling" | "juv";
export const broodAges: BroodAge[] = ["chick", "fledgling", "juv"];
export type BreedingCode =
  | "P"
  | "N"
  | "B"
  | "UN"
  | "FL"
  | "ON"
  | "FF"
  | "NE"
  | "NY";

export const breedingCodes: Record<BreedingCode, string> = {
  P: "Pair in habitat",
  N: "Near likely nest",
  B: "Nest Building",
  FF: "Carry food/shit",
  FL: "Fledged Young",
  UN: "Used nest or eggs",
  ON: "Occupied Nest",
  NE: "Nest with Eggs",
  NY: "Nest with Young",
};

export type BroodSurveyData = {
  count: number;
  age: BroodAge | null;
};

export type BirdSurveyData = {
  count: number;
  breedingCodes: BreedingCode[];
  notes: string;
  broods: BroodSurveyData[];
};

export type SectorSurveyData = {
  birds: Record<string, BirdSurveyData>;
  startTime: Date | null;
};

export type WeatherData = {
  temperature: number;
  windSpeed: 0 | 1 | 2 | 3 | 4;
  rain: 0 | 1 | 2 | 3 | 4;
  cloudCover: 0 | 1 | 2 | 3 | 4;
  icePct: number;
  snowCoverPct: number;
};

export type SiteSurveyData = {
  sectors: Record<string, SectorSurveyData>;
  weather: WeatherData;
  createdTimestamp: number;
};
const defaultWeather: WeatherData = {
  temperature: 0,
  windSpeed: 0,
  rain: 0,
  cloudCover: 0,
  icePct: 0,
  snowCoverPct: 0,
};

export function createSurvey(
  weather: WeatherData = defaultWeather,
): SiteSurveyData {
  return {
    weather: weather,
    createdTimestamp: Date.now(),
    sectors: sectorsList.reduce(
      (acc, sector) => {
        acc[sector.id] = {
          birds: birdsList.reduce(
            (acc, bird: BirdMetadata) => {
              acc[bird.shortName] = {
                count: 0,
                notes: "",
                broods: [],
                breedingCodes: [],
              };
              return acc;
            },
            {} as Record<string, BirdSurveyData>,
          ),
          startTime: null,
        };
        return acc;
      },
      {} as Record<string, SectorSurveyData>,
    ),
  };
}
