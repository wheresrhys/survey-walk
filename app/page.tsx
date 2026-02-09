'use client'

import { sectors, type Sector } from "@/app/models/sectors";
import { birds, type Bird } from "@/app/models/birds";
import { useImmer } from "use-immer";
import { useEffect, useState } from "react";
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
  console.log('out', surveyData);
  return (
    <div className="">
      <main className="">
        <nav className="tabs tabs-bordered overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal" id="sector-tabs">
          {sectors.map((sector, index) => (
            <button key={sector.id} type="button" className={`tab active-tab:tab-active ${index === 0 ? 'active' : ''}`} id={`tab-button-${sector.id}`} data-tab={`#tab-content-${sector.id}`} aria-controls={`#tab-content-${sector.id}`} role="tab" aria-selected="true">
              {sector.name}
            </button>
          ))}
        </nav>

        <div className="mt-2 p-2">
          {sectors.map((sector) => (
            <div id={`tab-content-${sector.id}`} role="tabpanel" aria-labelledby={`tab-button-${sector.id}`} className={`${activeTab === sector.id ? 'block' : 'hidden'}`} key={sector.id}>
      <h2>{sector.name}</h2>
              <SectorSurvey key={sector.id} birds={birds} surveyData={surveyData[sector.id]} activeTab={activeTab} />
            </div>
          ))}
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
