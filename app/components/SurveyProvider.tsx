"use client";
import { sectors, type Sector } from "@/app/models/sectors";
import { birds, type Bird } from "@/app/models/birds";
import {
  breedingCodes,
  type BreedingCode,
  type BroodAge,
  type BroodData,
} from "@/app/models/breeding";
import { createContext, useContext } from "react";
import { surveyReducer } from "@/app/lib/survey-reducer";
import { useImmerReducer } from "use-immer";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";

export const SurveyContext = createContext<SurveyData>({} as SurveyData);
export const SurveyDispatchContext = createContext<any>(null);

export type BirdData = {
  count: number;
  breedingCodes: BreedingCode[];
  notes: string;
  broods: BroodData[];
};

export type SectorData = Record<string, BirdData>;
export type SurveyData = Record<string, SectorData>;

export function useSurvey() {
  return useContext(SurveyContext);
}

export function useSurveyDispatch() {
  return useContext(SurveyDispatchContext);
}

function createSession(
  birds: Bird[],
  sectors: Sector[],
): Record<string, Record<string, BirdData>> {
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

export default function SurveyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultSession = createSession(birds, sectors);
  const [storedSession, setStoredSession] = useLocalStorage<SurveyData | null>(
    "survey-data",
    null,
  );
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize state with stored session or default
  const [surveyData, dispatch] = useImmerReducer(
    surveyReducer,
    storedSession || defaultSession,
  );

  // Sync surveyData changes back to localStorage
  useEffect(() => {
    setStoredSession(surveyData);
  }, [surveyData, setStoredSession]);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <SurveyContext value={surveyData}>
      <SurveyDispatchContext value={dispatch}>{children}</SurveyDispatchContext>
    </SurveyContext>
  );
}
