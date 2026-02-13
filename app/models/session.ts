"use client";
import { type BreedingCode, type BroodData } from "@/app/models/breeding";
import { sectors } from "@/app/models/sectors";
import { birds } from "@/app/models/birds";

export type BirdData = {
  count: number;
  breedingCodes: BreedingCode[];
  notes: string;
  broods: BroodData[];
};

export type SectorData = {
  birds: Record<string, BirdData>;
  startTime: Date | null;
};

export type Weather = {
  temperature: number;
  windSpeed: 0 | 1 | 2 | 3 | 4;
  rain: 0 | 1 | 2 | 3 | 4;
  cloudCover: 0 | 1 | 2 | 3 | 4;
  icePct: number;
  snowCoverPct: number;
};

export type SurveyData = {
  sectors: Record<string, SectorData>;
  weather: Weather;
};
const defaultWeather: Weather = {
  temperature: 0,
  windSpeed: 0,
  rain: 0,
  cloudCover: 0,
  icePct: 0,
  snowCoverPct: 0,
};

export function createSession(weather: Weather = defaultWeather): SurveyData {
  return {
    weather: weather,
    sectors: sectors.reduce(
      (acc, sector) => {
        acc[sector.id] = {
          birds: birds.reduce(
            (acc, bird) => {
              acc[bird.shortName] = {
                count: 0,
                notes: "",
                broods: [],
                breedingCodes: [],
              };
              return acc;
            },
            {} as Record<string, BirdData>,
          ),
          startTime: null,
        };
        return acc;
      },
      {} as Record<string, SectorData>,
    ),
  };
}
