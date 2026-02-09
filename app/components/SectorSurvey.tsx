import { Bird } from "@/app/models/birds";

export function SectorSurvey({ birds, surveyData, activeTab, decreaseBirdCount, increaseBirdCount }: { birds: Bird[], surveyData: Record<string, Record<string, number>>, activeTab: string, decreaseBirdCount: (birdName: string) => void, increaseBirdCount: (birdName: string) => void }) {
  return (

      <div className="flex flex-wrap gap-1">
      {birds.map((bird) => (
        <div className="join flex-[0_0_calc(33.333%-0.333rem)]" key={bird.shortName}>
          <button className="btn btn-sm btn-square btn-secondary join-item  flex-shrink-0" onClick={() => decreaseBirdCount(bird.shortName)}>{surveyData[activeTab][bird.shortName]}</button>
          <button className="btn btn-sm btn-soft btn-primary join-item flex-1 min-w-0" onClick={() => increaseBirdCount(bird.shortName)} value={bird.shortName}>{bird.shortName}</button>
        </div>
      ))}
      </div>
  )
}
