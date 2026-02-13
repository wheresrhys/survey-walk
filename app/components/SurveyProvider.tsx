'use client';
import { sectors, type Sector } from "@/app/models/sectors";
import { birds, type Bird } from "@/app/models/birds";
import { breedingCodes, type BreedingCode, type BroodAge, type BroodData } from "@/app/models/breeding";
import { createContext, useContext } from "react";
import { surveyReducer } from "@/app/lib/survey-reducer";
import { useImmerReducer } from "use-immer";

export const SurveyContext = createContext<SurveyData>({} as SurveyData);
export const SurveyDispatchContext = createContext<any>(null);


export type BirdData = {
  count: number;
  breedingCodes: BreedingCode[];
  notes: string;
  broods: BroodData[];
}

export type SectorData = Record<string, BirdData>;
export type SurveyData = Record<string, SectorData>;

export function useSurvey() {
  return useContext(SurveyContext);
}

export function useSurveyDispatch() {
  return useContext(SurveyDispatchContext);
}

function createSession(birds: Bird[], sectors: Sector[]): Record<string, Record<string, BirdData>> {
  return sectors.reduce((acc, sector) => {
    acc[sector.id] = birds.reduce((acc, bird) => {
      acc[bird.shortName] = {count: 0, notes: '', broods: [], breedingCodes: []} as BirdData;
      return acc as SectorData;
    }, {} as SectorData);
    return acc as SurveyData;
  }, {} as SurveyData);
}

export default function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [surveyData, dispatch] = useImmerReducer(surveyReducer, createSession(birds, sectors));
  return (
    <SurveyContext value={surveyData}>
      <SurveyDispatchContext value={dispatch}>
        {children}
      </SurveyDispatchContext>
    </SurveyContext>
  )
}
