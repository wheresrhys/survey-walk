"use client";
import { createSession, type SurveyData } from "@/app/models/session";
import { type BreedingCode, type BroodData } from "@/app/models/breeding";
import { createContext, useContext } from "react";
import { surveyReducer } from "@/app/lib/survey-reducer";
import { useImmerReducer } from "use-immer";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";

export const SurveyContext = createContext<SurveyData>({} as SurveyData);
export const SurveyDispatchContext = createContext<any>(null);

export function useSurvey() {
  return useContext(SurveyContext);
}

export function useSurveyDispatch() {
  return useContext(SurveyDispatchContext);
}

const SCHEMA_VERSION = 1

export default function SurveyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultSession = createSession();
  const [storedSession, setStoredSession] = useLocalStorage<{schemaVersion: number, surveyData: SurveyData} | null>(
    "survey-data",
    null,
  );


  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (storedSession && storedSession.schemaVersion !== SCHEMA_VERSION) {
      dispatch({ type: "CLEAR_SESSION", sectorId: 'ignore', birdName: 'ignore' });
    }
    setIsMounted(true);
  }, []);

  // Initialize state with stored session or default
  const [surveyData, dispatch] = useImmerReducer(
    surveyReducer,
    storedSession?.surveyData || defaultSession,
  );



  // Sync surveyData changes back to localStorage
  useEffect(() => {
    setStoredSession({ schemaVersion: SCHEMA_VERSION, surveyData: surveyData });
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
