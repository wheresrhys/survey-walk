import { Bird } from "@/app/models/birds";
import {
  useSurveyDispatch,
  type SectorData,
} from "@/app/components/SurveyProvider";
import { useLongPress } from "@react-aria/interactions";
import { useState } from "react";
import { BirdDetailPopup } from "@/app/components/BirdDetailPopup";

export function SectorSurvey({
  birds,
  activeTab,
  surveyData,
}: {
  birds: Bird[];
  surveyData: SectorData;
  activeTab: string;
}) {
  const dispatch = useSurveyDispatch();
  const [focusedBird, setFocusedBird] = useState<string | null>();
  const [speciesToAdd, setSpeciesToAdd] = useState<string>("");
  function changeSpeciesToAdd(event: React.ChangeEvent<HTMLInputElement>) {
    setSpeciesToAdd(event.target.value);
  }
  function addSpecies() {
    dispatch({
      type: "ADD_SPECIES",
      birdName: speciesToAdd,
      sectorId: activeTab,
    });
    setSpeciesToAdd("");
  }

  const { longPressProps } = useLongPress({
    accessibilityDescription: "Long press to add additional info",
    onLongPress: (event) => {
      setFocusedBird((event.target as HTMLButtonElement).textContent);
    },
  });

  function decreaseBirdCount(birdName: string) {
    dispatch({ type: "DECREASE_BIRD", birdName, sectorId: activeTab });
  }

  function increaseBirdCount(birdName: string) {
    dispatch({ type: "INCREASE_BIRD", birdName, sectorId: activeTab });
  }

  return (
    <>
      {focusedBird ? (
        <BirdDetailPopup
          birdName={focusedBird}
          sectorId={activeTab}
          onClose={() => setFocusedBird(null)}
          birdData={surveyData[focusedBird]}
        />
      ) : null}
      <div className="flex flex-wrap gap-1 mb-2">
        {Object.keys(surveyData).map((bird) => (
          <div className="join flex-[0_0_calc(33.333%-0.333rem)]" key={bird}>
            <button
              className="btn btn-sm btn-square btn-secondary join-item  flex-shrink-0"
              onClick={() => decreaseBirdCount(bird)}
            >
              {surveyData[bird].count}
            </button>
            <button
              className="btn btn-sm btn-soft btn-primary join-item flex-1 min-w-0"
              value={bird}
              {...longPressProps}
              onClick={() => increaseBirdCount(bird)}
            >
              {bird}
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="input max-w-sm mb-2 w-3/4">
          <input
            type="text"
            className="grow"
            value={speciesToAdd}
            placeholder="Add species"
            onChange={changeSpeciesToAdd}
          />
        </div>
        <button
          className="btn btn-primary join-item flex-1 min-w-0"
          onClick={addSpecies}
          type="button"
        >
          Add species
        </button>
      </div>
    </>
  );
}
