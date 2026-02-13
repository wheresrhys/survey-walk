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

export type SectorData = Record<string, BirdData>;
export type SurveyData = Record<string, SectorData>;

export function createSession(): Record<string, Record<string, BirdData>> {
  return sectors.reduce((acc, sector) => {
    acc[sector.id] = birds.reduce((acc, bird) => {
      acc[bird.shortName] = {
        count: 0,
        notes: "",
        broods: [],
        breedingCodes: [],
      } as BirdData;
      return acc as SectorData;
    }, {} as SectorData);
    return acc as SurveyData;
  }, {} as SurveyData);
}
