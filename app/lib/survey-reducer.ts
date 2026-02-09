import { Draft } from "immer";

type Action = {
  type: string
  sectorId: string
  birdName: string
}

export function surveyReducer(draft: Draft<Record<string, Record<string, number>>>, action: Action): Draft<Record<string, Record<string, number>>> {
  switch (action.type) {
    case 'DECREASE_BIRD':
      draft[action.sectorId][action.birdName] = draft[action.sectorId][action.birdName] - 1;

      return draft;
    case 'INCREASE_BIRD':
      draft[action.sectorId][action.birdName] = draft[action.sectorId][action.birdName] + 1;
      console.log('increase', draft);
      return draft;
    default:
      return draft;
  }
}
