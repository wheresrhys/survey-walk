'use client'

import { sectors, type Sector } from "@/app/models/sectors";
import { birds, type Bird } from "@/app/models/birds";
import { useState } from "react";
import { SectorSurvey } from "@/app/components/SectorSurvey";

import { useSurvey, useSurveyDispatch } from '@/app/components/SurveyProvider';
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
            <h2>{activeSector.name}</h2>
            <SectorSurvey key={activeSector.id} birds={birds} surveyData={surveyData[activeSector.id]} activeTab={activeTab} />
            </div>
        </div>


        <form>

            <div className="max-w-32" data-input-number>
              <label className="label-text" htmlFor="number-input-mini">Quantity:</label>
              <div className="input items-center">
                <button type="button" className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
                  <span className="icon-[tabler--minus] size-3.5 shrink-0"></span>
                </button>
                <input className="text-center" type="text" defaultValue="0" aria-label="Mini stacked buttons" data-input-number-input id="number-input-mini" />
                <button type="button" className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
                  <span className="icon-[tabler--plus] size-3.5 shrink-0"></span>
                </button>
              </div>
            </div>

        </form>

      </main>
    </div>
  );
}
