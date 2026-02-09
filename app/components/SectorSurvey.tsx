import { Bird } from "@/app/models/birds";
import {  useSurveyDispatch } from '@/app/components/SurveyProvider';
import { useLongPress } from "@uidotdev/usehooks";
import { useState } from "react";
import { BirdDetailPopup } from "@/app/components/BirdDetailPopup";

export function SectorSurvey({ birds, activeTab, surveyData }: { birds: Bird[], surveyData: Record<string, number>, activeTab: string}) {
  const dispatch = useSurveyDispatch();
  const [focusedBird, setFocusedBird] = useState<string | null>(null);

  const buttonLongPressAttrs = useLongPress(
    (event: MouseEvent) => {
      console.log('asdsa', (event.target as HTMLButtonElement).textContent);
      setFocusedBird((event.target as HTMLButtonElement).textContent);
    },
    {
      onStart: (event) => console.log("Press started"),
      onFinish: (event) => console.log("Press Finished"),
      onCancel: (event) => console.log("Press cancelled"),
      threshold: 500,
    }
  );

  function decreaseBirdCount(birdName: string) {
    dispatch({ type: 'DECREASE_BIRD', birdName, sectorId: activeTab });
  }

  function increaseBirdCount(birdName: string) {
    dispatch({ type: 'INCREASE_BIRD', birdName, sectorId: activeTab });
  }
  return (
<>
{focusedBird ? <BirdDetailPopup bird={focusedBird} sectorId={activeTab}/> : null}
      <div className="flex flex-wrap gap-1">
      {birds.map((bird) => (
        <div className="join flex-[0_0_calc(33.333%-0.333rem)]" key={bird.shortName}>
          <button className="btn btn-sm btn-square btn-secondary join-item  flex-shrink-0" onClick={() => decreaseBirdCount(bird.shortName)}>{surveyData[bird.shortName]}</button>
          <button className="btn btn-sm btn-soft btn-primary join-item flex-1 min-w-0" onClick={() => increaseBirdCount(bird.shortName)} value={bird.shortName} {...buttonLongPressAttrs}>{bird.shortName}</button>
        </div>
      ))}
      </div>
    </>
  )
}
