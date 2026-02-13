"use client";
import { sectors } from "@/app/models/sectors";
import { birds } from "@/app/models/birds";
import { createSession, type SurveyData } from "@/app/models/session";
import { type BreedingCode, type BroodData } from "@/app/models/breeding";
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

export function useSurvey() {
  return useContext(SurveyContext);
}

export function useSurveyDispatch() {
  return useContext(SurveyDispatchContext);
}

export default function SurveyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultSession = createSession();
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
