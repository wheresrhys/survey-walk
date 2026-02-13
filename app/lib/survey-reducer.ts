import { Draft } from "immer";
import { createSurvey, type SiteSurveyData } from "@/app/models/survey";
import { type BreedingCode, type BroodAge } from "@/app/models/survey";
import { type WeatherData } from "@/app/models/survey";

interface BaseAction {
  type: string;
  sectorId: string;
  birdName: string;
}

// Individual action types using discriminated unions
export type SurveyAction =
  | ({
      type: "NEW_SESSION";
      weather?: WeatherData;
    } & BaseAction)
  | ({ type: "SET_SECTOR_START_TIME" } & BaseAction)
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
    } & BaseAction)
  | ({ type: "ADD_SPECIES" } & BaseAction);

export function surveyReducer(
  draft: Draft<SiteSurveyData>,
  action: SurveyAction,
): Draft<SiteSurveyData> {
  switch (action.type) {
    case "NEW_SESSION":
      return createSurvey(action.weather);
    case "SET_SECTOR_START_TIME":
      draft.sectors[action.sectorId].startTime = new Date();
      return draft;
    case "DECREASE_BIRD":
      draft.sectors[action.sectorId].birds[action.birdName].count = Math.max(
        0,
        draft.sectors[action.sectorId].birds[action.birdName].count - 1,
      );
      return draft;
    case "INCREASE_BIRD":
      draft.sectors[action.sectorId].birds[action.birdName].count =
        draft.sectors[action.sectorId].birds[action.birdName].count + 1;
      return draft;
    case "UPDATE_BIRD_COUNT":
      draft.sectors[action.sectorId].birds[action.birdName].count =
        action.count || 0;
      return draft;
    case "UPDATE_BIRD_NOTES":
      draft.sectors[action.sectorId].birds[action.birdName].notes =
        action.notes;
      return draft;
    case "UPDATE_BIRD_BREEDING_CODES":
      if (action.checked) {
        draft.sectors[action.sectorId].birds[action.birdName].breedingCodes = [
          ...draft.sectors[action.sectorId].birds[action.birdName]
            .breedingCodes,
          action.breedingCode,
        ];
      } else {
        draft.sectors[action.sectorId].birds[action.birdName].breedingCodes =
          draft.sectors[action.sectorId].birds[
            action.birdName
          ].breedingCodes.filter((code) => code !== action.breedingCode);
      }
      return draft;
    case "ADD_BROOD":
      draft.sectors[action.sectorId].birds[action.birdName].broods.push({
        count: 1,
        age: null,
      });
      return draft;
    case "REMOVE_BROOD":
      const broodsCopy = [
        ...draft.sectors[action.sectorId].birds[action.birdName].broods,
      ];
      broodsCopy.splice(action.broodIndex, 1);
      draft.sectors[action.sectorId].birds[action.birdName].broods = broodsCopy;
      return draft;
    case "UPDATE_BROOD_COUNT":
      draft.sectors[action.sectorId].birds[action.birdName].broods[
        action.broodIndex
      ].count = action.count || 0;
      return draft;
    case "UPDATE_BROOD_AGE":
      draft.sectors[action.sectorId].birds[action.birdName].broods[
        action.broodIndex
      ].age = action.age as BroodAge;
      return draft;
    case "ADD_SPECIES":
      if (!action.birdName) {
        return draft;
      }
      Object.keys(draft.sectors).forEach((sectorId) => {
        draft.sectors[sectorId].birds[action.birdName] = {
          count: sectorId === action.sectorId ? 1 : 0,
          notes: "",
          broods: [],
          breedingCodes: [],
        };
      });
      return draft;
    default:
      return draft;
  }
}
