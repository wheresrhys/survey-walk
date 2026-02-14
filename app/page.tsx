"use client";

import { sectorsList, type SectorMetadata } from "@/app/data/sectors-gazetteer";
import { useState, useEffect, useRef } from "react";
import { SectorSurvey } from "@/app/components/SectorSurvey";
import { useSurvey } from "@/app/components/SurveyProvider";
import Link from "next/link";
import { exportToExcel } from "@/app/lib/excel-export";

export default function Home() {
  const [activeTab, setActiveTab] = useState(sectorsList[0].id);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const surveyData = useSurvey();
  const activeSector = sectorsList.find(
    (sector: SectorMetadata) => sector.id === activeTab,
  ) as SectorMetadata;
  const activeIndex = sectorsList.findIndex(
    (sector: SectorMetadata) => sector.id === activeTab,
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveTab(sectorsList[0].id);
  }, [surveyData.createdTime]);

  useEffect(() => {
    activeTabRef.current?.parentElement?.scrollTo({
      left:
        activeTabRef.current?.offsetLeft +
        activeTabRef.current?.offsetWidth / 2 -
        window.innerWidth / 2,
      behavior: "smooth",
    });
  }, [activeTab]);
  return (
    <main className="light">
      <nav
        className="tabs tabs-bordered overflow-x-auto gap-2 fixed top-0 left-0 right-0 z-10 bg-base-100"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
        id="sector-tabs"
      >
        {sectorsList.map((sector: SectorMetadata) => (
          <button
            key={sector.id}
            ref={activeTab === sector.id ? activeTabRef : null}
            type="button"
            className={`py-4 h-auto tab active-tab:tab-active ${activeTab === sector.id ? "active" : ""} text-nowrap`}
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

      <div className="mt-15 p-2">
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
        <Link className="btn btn-primary" href="/new-survey">
          Start New Survey
        </Link>
      </div>
    </main>
  );
}
