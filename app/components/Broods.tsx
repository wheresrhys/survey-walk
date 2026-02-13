"use client";
import { type BroodAge, type BroodData } from "@/app/models/breeding";
import { type SurveyAction } from "@/app/lib/survey-reducer";
import { type Dispatch } from "react";
const broodAges = ["chick", "fledgling", "juv"];

export type OmitFromUnion<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

function Brood({
  brood,
  broodIndex,
  dispatch,
}: {
  brood: BroodData;
  broodIndex: number;
  dispatch: (
    action: OmitFromUnion<SurveyAction, "sectorId" | "birdName">,
  ) => ReturnType<Dispatch<SurveyAction>>;
}) {
  function removeBrood() {
    dispatch({ type: "REMOVE_BROOD", broodIndex });
  }
  function handleBroodCountChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "UPDATE_BROOD_COUNT",
      broodIndex,
      count: parseInt(event.target.value),
    });
  }

  function handleBroodAgeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: "UPDATE_BROOD_AGE",
      broodIndex,
      age: event.target.value as BroodAge,
    });
  }
  return (
    <div>
      <div className="input max-w-sm">
        <label
          className="label-text my-auto me-3 p-0"
          htmlFor="inlineLabelName"
        >
          Count:
        </label>
        <input
          type="number"
          className="grow"
          value={brood.count}
          id="inlineLabelName"
          onChange={handleBroodCountChange}
        />
      </div>
      <select
        className="select max-w-sm rounded-full"
        aria-label="Brood Age"
        value={brood.age || ""}
        onChange={handleBroodAgeChange}
      >
        <option disabled>Brood age</option>
        {broodAges.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="btn btn-soft btn-secondary btn-xs"
        onClick={removeBrood}
      >
        Remove Brood
      </button>
    </div>
  );
}

export function Broods({
  broodsData,
  sectorId,
  birdName,
  dispatch,
}: {
  broodsData: BroodData[];
  sectorId: string;
  birdName: string;
  dispatch: Dispatch<SurveyAction>;
}) {
  function addBrood() {
    dispatch({ type: "ADD_BROOD", sectorId, birdName });
  }

  function broodDispatch(
    action: OmitFromUnion<SurveyAction, "sectorId" | "birdName">,
  ): ReturnType<Dispatch<SurveyAction>> {
    return dispatch({ ...action, sectorId, birdName });
  }

  return (
    <div>
      {broodsData.map((brood, index) => (
        <Brood
          brood={brood}
          key={index}
          broodIndex={index}
          dispatch={broodDispatch}
        />
      ))}
      <button
        onClick={addBrood}
        className="btn btn-soft btn-secondary btn-sm"
        type="button"
      >
        Add Brood
      </button>
    </div>
  );
}
