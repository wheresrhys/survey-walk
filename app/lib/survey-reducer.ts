import { Draft } from "immer";
import { createSession, type SurveyData } from "@/app/models/session";
import { type BreedingCode, type BroodAge } from "@/app/models/breeding";

interface BaseAction {
  type: string;
  sectorId: string;
  birdName: string;
}

// Individual action types using discriminated unions
export type SurveyAction =
  | ({
      type: "CLEAR_SESSION";
    } & BaseAction)
  | ({ type: "DECREASE_BIRD" } & BaseAction)
  | ({ type: "INCREASE_BIRD" } & BaseAction)
  | ({ type: "UPDATE_BIRD_COUNT"; count: number } & BaseAction)
  | ({ type: "UPDATE_BIRD_NOTES"; notes: string } & BaseAction)
  | ({
      type: "UPDATE_BIRD_BREEDING_CODES";
      breedingCode: BreedingCode;
      checked: boolean;
    } & BaseAction)
  | ({ type: "ADD_BROOD" } & BaseAction)
  | ({ type: "REMOVE_BROOD"; broodIndex: number } & BaseAction)
  | ({
      type: "UPDATE_BROOD_COUNT";
      broodIndex: number;
      count: number;
    } & BaseAction)
  | ({
      type: "UPDATE_BROOD_AGE";
      broodIndex: number;
      age: BroodAge;
    } & BaseAction);

export function surveyReducer(
  draft: Draft<SurveyData>,
  action: SurveyAction,
): Draft<SurveyData> {
  switch (action.type) {
    case "CLEAR_SESSION":
      return createSession();
    case "DECREASE_BIRD":
      draft[action.sectorId][action.birdName].count = Math.max(
        0,
        draft[action.sectorId][action.birdName].count - 1,
      );
      return draft;
    case "INCREASE_BIRD":
      draft[action.sectorId][action.birdName].count =
        draft[action.sectorId][action.birdName].count + 1;
      console.log("increase", draft);
      return draft;
    case "UPDATE_BIRD_COUNT":
      draft[action.sectorId][action.birdName].count = action.count || 0;
      return draft;
    case "UPDATE_BIRD_NOTES":
      draft[action.sectorId][action.birdName].notes = action.notes;
      return draft;
    case "UPDATE_BIRD_BREEDING_CODES":
      if (action.checked) {
        draft[action.sectorId][action.birdName].breedingCodes = [
          ...draft[action.sectorId][action.birdName].breedingCodes,
          action.breedingCode,
        ];
      } else {
        draft[action.sectorId][action.birdName].breedingCodes = draft[
          action.sectorId
        ][action.birdName].breedingCodes.filter(
          (code) => code !== action.breedingCode,
        );
      }
      return draft;
    case "ADD_BROOD":
      draft[action.sectorId][action.birdName].broods.push({
        count: 1,
        age: null,
      });
      return draft;
    case "REMOVE_BROOD":
      const broodsCopy = [...draft[action.sectorId][action.birdName].broods];
      broodsCopy.splice(action.broodIndex, 1);
      draft[action.sectorId][action.birdName].broods = broodsCopy;
      return draft;
    case "UPDATE_BROOD_COUNT":
      draft[action.sectorId][action.birdName].broods[action.broodIndex].count =
        action.count || 0;
      return draft;
    case "UPDATE_BROOD_AGE":
      draft[action.sectorId][action.birdName].broods[action.broodIndex].age =
        action.age as BroodAge;
      return draft;
    default:
      return draft;
  }
}
