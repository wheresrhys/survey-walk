"use client";

import { sectorsList, type SectorMetadata } from "@/app/data/sectors-gazetteer";
import { useState, useEffect } from "react";
import { SectorSurvey } from "@/app/components/SectorSurvey";
import { useSurvey } from "@/app/components/SurveyProvider";
import Link from "next/link";
import { exportToExcel } from "@/app/lib/excel-export";

export default function Home() {
  const [activeTab, setActiveTab] = useState(sectorsList[0].id);
  const surveyData = useSurvey();
  const activeSector = sectorsList.find(
    (sector: SectorMetadata) => sector.id === activeTab,
  ) as SectorMetadata;
  const activeIndex = sectorsList.findIndex(
    (sector: SectorMetadata) => sector.id === activeTab,
  );

  useEffect(() => {
    setActiveTab(sectorsList[0].id);
  }, [surveyData.createdTimestamp]);

  return (
    <main className="">
      <nav
        className="tabs tabs-bordered overflow-x-auto"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
        id="sector-tabs"
      >
        {sectorsList.map((sector: SectorMetadata) => (
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
          <SectorSurvey
            key={activeSector.id}
            sectorSurveyData={surveyData.sectors[activeSector.id]}
            activeTab={activeTab}
            startTime={surveyData.sectors[activeSector.id].startTime}
            title={`${activeIndex + 1}: ${activeSector.name}`}
          />
        </div>
      </div>

      <div className="flex items-center justify-start gap-2 flex-wrap">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => exportToExcel(surveyData, "lvrpa")}
        >
          Export LVRPA
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => exportToExcel(surveyData, "stats")}
        >
          Export stats
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => exportToExcel(surveyData, "ebird", "csv")}
        >
          Export Ebird
        </button>
        <Link className="btn btn-primary" href="/new-session">
          Start New Survey
        </Link>
      </div>
    </main>
  );
}
