
import { sectors, type Sector } from "@/app/models/sectors";
import { birds, type Bird } from "@/app/models/birds";
import { createContext, useContext } from "react";
import { surveyReducer } from "@/app/lib/survey-reducer";
import { useImmerReducer } from "use-immer";
export const SurveyContext = createContext<Record<string, Record<string, number>> | null>(null);
export const SurveyDispatchContext = createContext<Dispatch<any> | null>(null);

export function useSurvey() {
  return useContext(SurveyContext);
}

export function useSurveyDispatch() {
  return useContext(SurveyDispatchContext);
}

function createSession(birds: Bird[], sectors: Sector[]): Record<string, Record<string, number>> {
  return sectors.reduce((acc, sector) => {
    acc[sector.id] = birds.reduce((acc, bird) => {
      acc[bird.shortName] = 0;
      return acc as Record<string, number>;
    }, {} as Record<string, number>);
    return acc as Record<string, Record<string, number>>;
  }, {} as Record<string, Record<string, number>>);
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
