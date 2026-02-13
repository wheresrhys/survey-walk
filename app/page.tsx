"use client";

import { sectors, type Sector } from "@/app/models/sectors";
import { useState } from "react";
import { SectorSurvey } from "@/app/components/SectorSurvey";
// import { exportToExcel } from "@/app/lib/excel-export";
import { useSurveyDispatch, useSurvey } from "@/app/components/SurveyProvider";
import { useEffect } from "react";
import Link from "next/link";
export default function Home() {
  const [activeTab, setActiveTab] = useState(sectors[0].id);
  const surveyData = useSurvey();
  const activeSector = sectors.find(
    (sector) => sector.id === activeTab,
  ) as Sector;
  const activeIndex = sectors.findIndex((sector) => sector.id === activeTab);

  useEffect(() => {
    setActiveTab(sectors[0].id);
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
        <Link
          className="btn btn-primary"
          href="/new-session"
        >
          New Session
        </Link>
      </div>
    </main>
  );
}
