"use client";

import { sectors, type Sector } from "@/app/models/sectors";
import { birds } from "@/app/models/birds";
import { type SectorData } from "@/app/models/session";
import { useState } from "react";
import { SectorSurvey } from "@/app/components/SectorSurvey";
// import { exportToExcel } from "@/app/lib/excel-export";
import { useSurveyDispatch, useSurvey } from "@/app/components/SurveyProvider";

export default function Home() {
  const [activeTab, setActiveTab] = useState(sectors[0].id);
  const surveyData = useSurvey();
  const dispatch = useSurveyDispatch();
  const activeSector = sectors.find(
    (sector) => sector.id === activeTab,
  ) as Sector;
  const activeIndex = sectors.findIndex((sector) => sector.id === activeTab);

  function clearSession() {
    if (confirm("Are you sure you want to clear the session?")) {
      if (confirm("Really really sure????")) {
        if (confirm("On your own head be it!!")) {
          dispatch({ type: "CLEAR_SESSION", sectorId: null, birdName: null });
        }
      }
    }
  }

  return (
    <main className="">
      <nav
        className="tabs tabs-bordered overflow-x-auto"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
        id="sector-tabs"
      >
        {sectors.map((sector, index) => (
          <button
            key={sector.id}
            type="button"
            className={`tab active-tab:tab-active ${activeTab === sector.id ? "active" : ""}`}
            id={`tab-button-${sector.id}`}
            data-tab={`#tab-content`}
            aria-controls={`#tab-content`}
            role="tab"
            aria-selected={activeTab === sector.id}
            onClick={() => setActiveTab(sector.id)}
          >
            {sector.name}
          </button>
        ))}
      </nav>

      <div className="mt-2 p-2">
        <div
          id={`tab-content`}
          role="tabpanel"
          aria-labelledby={`tab-button-${activeSector.id}`}
          className="block"
        >
          <h2 className="text-2xl font-bold">
            {activeIndex + 1}: {activeSector.name}
          </h2>
          <SectorSurvey
            key={activeSector.id}
            sectorSurveyData={surveyData.sectors[activeSector.id]}
            activeTab={activeTab}
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={clearSession}
        >
          Clear Session
        </button>
      </div>
    </main>
  );
}
