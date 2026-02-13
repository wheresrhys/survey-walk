import { Draft } from "immer";
import { type SurveyData } from "@/app/components/SurveyProvider";
import {type BreedingCode} from "@/app/models/breeding";

interface Action {
  type: string
  sectorId: string
  birdName: string
  count?: number
  notes?: string
  breedingCode?: BreedingCode
  checked?: boolean
}

export function surveyReducer(draft: Draft<SurveyData>, action: Action): Draft<SurveyData> {
  switch (action.type) {
    case 'DECREASE_BIRD':
      draft[action.sectorId][action.birdName].count = Math.max(0, draft[action.sectorId][action.birdName].count - 1);
      return draft;
    case 'INCREASE_BIRD':
      draft[action.sectorId][action.birdName].count = draft[action.sectorId][action.birdName].count + 1;
      console.log('increase', draft);
      return draft;
    case 'UPDATE_BIRD_COUNT':
      draft[action.sectorId][action.birdName].count = action.count || 0
      return draft;
    case 'UPDATE_BIRD_NOTES':
      draft[action.sectorId][action.birdName].notes = action.notes;
      return draft;
    case 'UPDATE_BIRD_BREEDING_CODES':
      if (action.checked) {
        draft[action.sectorId][action.birdName].breedingCodes = [...draft[action.sectorId][action.birdName].breedingCodes, action.breedingCode]
      } else {
        draft[action.sectorId][action.birdName].breedingCodes = draft[action.sectorId][action.birdName].breedingCodes.filter(code => code !== action.breedingCode);
      }
      return draft;
    default:
      return draft;
  }
}
