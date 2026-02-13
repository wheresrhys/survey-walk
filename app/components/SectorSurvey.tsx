import { useSurveyDispatch } from "@/app/components/SurveyProvider";
import { type SectorData } from "@/app/models/session";
import { useLongPress } from "@react-aria/interactions";
import { useEffect, useState } from "react";
import { BirdDetailPopup } from "@/app/components/BirdDetailPopup";
import { format as formatDate } from "date-fns";

export function SectorSurvey({
  activeTab,
  sectorSurveyData,
  title,
  startTime,
}: {
  sectorSurveyData: SectorData;
  activeTab: string;
  title: string;
  startTime: Date | null;
}) {
  const dispatch = useSurveyDispatch();
  const [focusedBird, setFocusedBird] = useState<string | null>();
  const [speciesToAdd, setSpeciesToAdd] = useState<string>("");

  useEffect(() => {
    if (sectorSurveyData.startTime === null) {
      dispatch({
        type: "SET_SECTOR_START_TIME",
        sectorId: activeTab,
        birdName: null,
      });
    }
  }, [activeTab]);
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
      <h2 className="text-2xl font-bold">
        {title}{" "}
        {startTime ? (
          <small>(started {formatDate(startTime, "HH:mm")})</small>
        ) : null}
      </h2>
      {focusedBird ? (
        <BirdDetailPopup
          birdName={focusedBird}
          sectorId={activeTab}
          onClose={() => setFocusedBird(null)}
          birdData={sectorSurveyData.birds[focusedBird]}
        />
      ) : null}
      <div className="flex flex-wrap gap-1 mb-2">
        {Object.keys(sectorSurveyData.birds).map((bird) => (
          <div className="join flex-[0_0_calc(33.333%-0.333rem)]" key={bird}>
            <button
              className="btn btn-sm btn-square btn-secondary join-item  flex-shrink-0"
              onClick={() => decreaseBirdCount(bird)}
            >
              {sectorSurveyData.birds[bird].count}
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
