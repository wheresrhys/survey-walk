"use client";

import { sectorsList, type SectorMetadata } from "@/app/data/sectors-gazetteer";
import { useState, useEffect, useRef } from "react";
import { SectorSurvey } from "@/app/components/SectorSurvey";
import { useSurvey, useSurveyDispatch } from "@/app/components/SurveyProvider";
import Link from "next/link";
import { exportToExcel } from "@/app/lib/excel-export";

function Toolbar({
  showTools,
  setShowTools,
  isFrozen,
  toggleFreeze,
  exportToExcel,
}: {
  showTools: boolean;
  setShowTools: (showTools: boolean) => void;
  isFrozen: boolean;
  toggleFreeze: () => void;
  exportToExcel: (
    type: "ebird" | "lvrpa" | "stats",
    format?: "csv" | "xlsx",
  ) => void;
}) {
  return (
    <>
      <div
        className={`flex items-center justify-start gap-2 flex-wrap fixed top-0 left-0 right-0 bg-base-100 p-2 transition-transform duration-300 transform z-9  ${showTools ? "translate-y-0" : "-translate-y-full"}`}
      >
        {isFrozen ? (
          <>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => exportToExcel("lvrpa")}
            >
              Export LVRPA
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => exportToExcel("stats")}
            >
              Export stats
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => exportToExcel("ebird", "csv")}
            >
              Export Ebird
            </button>
            <Link className="btn btn-secondary" href="/table-view">
              Table View
            </Link>
          </>
        ) : null}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={toggleFreeze}
        >
          {isFrozen ? "Unfreeze survey" : "Freeze survey"}
        </button>

        <Link className="btn btn-primary" href="/new-survey">
          Start New Survey
        </Link>
      </div>
      <button
        type="button"
        className="btn fixed top-0 right-0 m-2 z-10 btn-circle"
        onClick={() => setShowTools(!showTools)}
      >
        {showTools ? (
          <span className="icon-[tabler--chevron-up] icon-size-4"></span>
        ) : (
          <span className="icon-[tabler--chevron-down] icon-size-4"></span>
        )}
      </button>
    </>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(sectorsList[0].id);
  const [showTools, setShowTools] = useState(false);
  const dispatch = useSurveyDispatch();
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

  function toggleFreeze() {
    if (surveyData.isFrozen) {
      if (confirm("Are you sure you want to unfreeze the survey?")) {
        dispatch({ type: "TOGGLE_FREEZE" });
      }
    } else {
      dispatch({ type: "TOGGLE_FREEZE" });
    }
  }
  return (
    <main>
      <Toolbar
        showTools={showTools}
        setShowTools={setShowTools}
        isFrozen={surveyData.isFrozen}
        toggleFreeze={toggleFreeze}
        exportToExcel={(type, format) =>
          exportToExcel(surveyData, type, format)
        }
      />
      <nav
        className="tabs tabs-bordered overflow-x-auto gap-2 fixed top-0 left-0 right-0 z-5 bg-base-100 px-50"
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

      <div className="mt-15 p-2 mb-7">
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
    </main>
  );
}
