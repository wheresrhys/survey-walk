"use client";
import {
  type BroodAge,
  type BroodSurveyData,
  broodAges,
} from "@/app/models/survey";
import { type SurveyAction } from "@/app/lib/survey-reducer";
import { type Dispatch } from "react";

export type OmitFromUnion<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

function Brood({
  sectorId,
  birdName,
  brood,
  broodIndex,
  dispatch,
}: {
  brood: BroodSurveyData;
  broodIndex: number;
  dispatch: Dispatch<SurveyAction>;
  sectorId: string;
  birdName: string;
}) {
  function removeBrood() {
    dispatch({ type: "REMOVE_BROOD", broodIndex, sectorId, birdName });
  }
  function handleBroodCountChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "UPDATE_BROOD_COUNT",
      sectorId,
      birdName,
      broodIndex,
      count: parseInt(event.target.value),
    });
  }

  function handleBroodAgeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: "UPDATE_BROOD_AGE",
      sectorId,
      birdName,
      broodIndex,
      age: event.target.value as BroodAge,
    });
  }
  return (
    <div className="flex gap-2 mb-2 items-center">
      <div className="input max-w-sm w-1/3">
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
        className="select max-w-sm rounded-full w-1/3"
        aria-label="Brood Age"
        value={brood.age || ""}
        onChange={handleBroodAgeChange}
      >
        <option value="">Brood age</option>
        {broodAges.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>

      <button
        type="button"
        className="btn btn-soft btn-primary btn-sm"
        onClick={removeBrood}
      >
        Remove
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
  broodsData: BroodSurveyData[];
  sectorId: string;
  birdName: string;
  dispatch: Dispatch<SurveyAction>;
}) {
  function addBrood() {
    dispatch({ type: "ADD_BROOD", sectorId, birdName });
  }

  return (
    <div className="mb-4">
      {broodsData.map((brood, index) => (
        <Brood
          brood={brood}
          key={index}
          broodIndex={index}
          dispatch={dispatch}
          sectorId={sectorId}
          birdName={birdName}
        />
      ))}
      <div className="flex justify-end">
        <button
          onClick={addBrood}
          className="btn btn-primary btn-sm"
          type="button"
        >
          Add Brood
        </button>
      </div>
    </div>
  );
}
