import { useSurveyDispatch } from "@/app/components/SurveyProvider";
import { type SectorSurveyData } from "@/app/models/survey";
import { useLongPress } from "@react-aria/interactions";
import { useEffect, useState, useEffectEvent } from "react";
import { BirdDetailPopup } from "@/app/components/BirdDetailPopup";
import { format as formatDate } from "date-fns";
import { usePriorityBirds } from "./PriorityBirdsProvider";

export function SectorSurvey({
  activeTab,
  sectorSurveyData,
  title,
  startTime,
}: {
  sectorSurveyData: SectorSurveyData;
  activeTab: string;
  title: string;
  startTime: Date | null;
}) {
  const dispatch = useSurveyDispatch();
  const priorityBirds = usePriorityBirds()[activeTab];
  const [focusedBird, setFocusedBird] = useState<string | null>();
  const [speciesToAdd, setSpeciesToAdd] = useState<string>("");
  const setSectorStartTime = useEffectEvent((activeTab: string) => {
    if (sectorSurveyData.startTime === null) {
      dispatch({
        type: "SET_SECTOR_START_TIME",
        sectorId: activeTab,
      });
    }
  });
  console.log("priorityBirds", priorityBirds);
  const prioritisedBirds = Object.keys(sectorSurveyData.birds).sort(
    (aName, bName) => {
      console.log(
        "aName",
        aName,
        priorityBirds.has(aName),
        "bName",
        bName,
        priorityBirds.has(bName),
      );
      const aPriority = priorityBirds.has(aName) ? 1 : 0;
      const bPriority = priorityBirds.has(bName) ? 1 : 0;
      return bPriority - aPriority;
    },
  );

  console.log("prioritisedBirds", prioritisedBirds);

  useEffect(() => {
    setSectorStartTime(activeTab);
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
      <h2 className="text-2xl font-bold mb-3">
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
        {prioritisedBirds.map((birdName) => (
          <div
            className="join flex-[0_0_calc(33.333%-0.333rem)] mb-1"
            key={birdName}
          >
            <button
              className="btn btn-sm btn-square btn-secondary join-item  flex-shrink-0"
              onClick={() => decreaseBirdCount(birdName)}
            >
              {sectorSurveyData.birds[birdName].count}
            </button>
            <button
              className={`btn btn-sm ${priorityBirds.has(birdName) ? "btn-soft btn-primary" : "btn-soft btn-secondary"} join-item flex-1 min-w-0 font-bold`}
              value={birdName}
              {...longPressProps}
              onClick={() => increaseBirdCount(birdName)}
            >
              {birdName}
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex gap-2">
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
          className="btn btn-primary join-item"
          onClick={addSpecies}
          type="button"
        >
          Add species
        </button>
      </div>
    </>
  );
}
