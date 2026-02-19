"use client";
import { createSurvey, type SiteSurveyData } from "@/app/models/survey";
import { createContext, useContext } from "react";
import { surveyReducer } from "@/app/lib/survey-reducer";
import { useImmerReducer } from "use-immer";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState, type Dispatch, useEffectEvent } from "react";
import { type SurveyAction } from "@/app/lib/survey-reducer";

export const SurveyContext = createContext<SiteSurveyData>(
  {} as SiteSurveyData,
);
export const SurveyDispatchContext = createContext<
  Dispatch<SurveyAction> | ((action: SurveyAction) => void)
>(() => undefined);

export function useSurvey() {
  return useContext(SurveyContext);
}

export function useSurveyDispatch() {
  return useContext(SurveyDispatchContext);
}

const SCHEMA_VERSION = 5;

export default function SurveyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [storedSurvey, setStoredSurvey] = useLocalStorage<{
    schemaVersion: number;
    surveyData: SiteSurveyData;
  } | null>("survey-data", null);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize state with stored Survey or default
  const [surveyData, dispatch] = useImmerReducer(
    surveyReducer,
    storedSurvey?.surveyData || createSurvey(),
  );

  const bustCachedIncompatableSurvey = useEffectEvent(() => {
    if (storedSurvey && storedSurvey.schemaVersion !== SCHEMA_VERSION) {
      dispatch({ type: "NEW_SURVEY" });
    }
  });

  useEffect(() => {
    bustCachedIncompatableSurvey();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Sync surveyData changes back to localStorage
  useEffect(() => {
    setStoredSurvey({ schemaVersion: SCHEMA_VERSION, surveyData: surveyData });
  }, [surveyData, setStoredSurvey]);

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
