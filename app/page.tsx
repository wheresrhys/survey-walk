'use client'

import { sectors, type Sector } from "@/app/models/sectors";
import { birds, type Bird } from "@/app/models/birds";
import { useState } from "react";
import { SectorSurvey } from "@/app/components/SectorSurvey";

import { useSurvey, useSurveyDispatch, type SectorData } from '@/app/components/SurveyProvider';
function createSession(birds: Bird[], sectors: Sector[]): Record<string, Record<string, number>> {
  return sectors.reduce((acc, sector) => {
    acc[sector.id] = birds.reduce((acc, bird) => {
      acc[bird.shortName] = 0;
      return acc as Record<string, number>;
    }, {} as Record<string, number>);
    return acc as Record<string, Record<string, number>>;
  }, {} as Record<string, Record<string, number>>);
}
export default function Home() {
  const [activeTab, setActiveTab] = useState(sectors[0].id);
  const surveyData = useSurvey();
  const activeSector = sectors.find((sector) => sector.id === activeTab) as Sector;

  return (
    <div className="">
      <main className="">
        <nav className="tabs tabs-bordered overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal" id="sector-tabs">
          {sectors.map((sector, index) => (
            <button key={sector.id} type="button" className={`tab active-tab:tab-active ${activeTab === sector.id ? 'active' : ''}`} id={`tab-button-${sector.id}`} data-tab={`#tab-content`} aria-controls={`#tab-content`} role="tab" aria-selected={activeTab === sector.id} onClick={() => setActiveTab(sector.id)} >
              {sector.name}
            </button>
          ))}
        </nav>

        <div className="mt-2 p-2">
          <div id={`tab-content`} role="tabpanel" aria-labelledby={`tab-button-${activeSector.id}`} className='block'>
            <h2 className="text-2xl font-bold">{activeSector.name}</h2>
            <SectorSurvey key={activeSector.id} birds={birds} surveyData={surveyData[activeSector.id] as SectorData} activeTab={activeTab} />
            </div>
        </div>

      </main>
    </div>
  );
}
