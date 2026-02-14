"use client";
import { useState } from "react";
import { useSurveyDispatch } from "../components/SurveyProvider";
import { type WeatherData } from "../models/survey";
import { redirect } from "next/navigation";

export default function NewSurvey() {
  const dispatch = useSurveyDispatch();
  const [temperature, setTemperature] = useState(10);
  const [windSpeed, setWindSpeed] = useState(0);
  const [rain, setRain] = useState(0);
  const [cloudCover, setCloudCover] = useState(0);
  const [icePct, setIcePct] = useState(0);
  const [snowCoverPct, setSnowCoverPct] = useState(0);

  function clearSession(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const weatherData = [...formData.keys()].reduce((acc, key) => {
      // @ts-expect-error - key is a string, but we know it's a key of Weather
      acc[key] = parseInt(formData.get(key) as string, 10);
      return acc;
    }, {} as Partial<WeatherData>) as WeatherData;
    if (confirm("Are you sure you want to clear the session?")) {
      if (confirm("Really really sure - this can't be undone????")) {
        if (confirm("On your own head be it!!")) {
          dispatch({
            type: "NEW_SESSION",
            sectorId: null,
            birdName: null,
            weather: weatherData,
          });
          redirect("/");
        }
      }
    }
  }
  return (
    <main className="m-4">
      <h1 className="text-2xl font-bold mb-4">New Session</h1>
      <form onSubmit={clearSession}>
        <div className="input mb-2 w-full">
          <label
            className="label-text my-auto me-3 p-0 w-3/4"
            htmlFor="temperature"
          >
            Temp:
          </label>
          <input
            type="number"
            className="grow"
            value={temperature}
            id="temperature"
            name="temperature"
            step={1}
            onChange={(e) => setTemperature(parseInt(e.target.value))}
          />
        </div>
        <div className="input mb-2 w-full">
          <label
            className="label-text my-auto me-3 p-0 w-3/4"
            htmlFor="windSpeed"
          >
            Wind Speed:
          </label>
          <input
            type="number"
            className="grow"
            value={windSpeed}
            id="windSpeed"
            name="windSpeed"
            min={0}
            max={4}
            step={1}
            onChange={(e) => setWindSpeed(parseInt(e.target.value))}
          />
        </div>
        <div className="input mb-2 w-full">
          <label
            className="label-text my-auto me-3 p-0 w-3/4"
            htmlFor="cloudCover"
          >
            Rain:
          </label>
          <input
            type="number"
            className="grow"
            value={rain}
            id="rain"
            name="rain"
            min={0}
            max={4}
            step={1}
            onChange={(e) => setRain(parseInt(e.target.value))}
          />
        </div>
        <div className="input mb-2 w-full">
          <label
            className="label-text my-auto me-3 p-0 w-3/4"
            htmlFor="cloudCover"
          >
            Cloud Cover:
          </label>
          <input
            type="number"
            className="grow"
            value={cloudCover}
            id="cloudCover"
            name="cloudCover"
            min={0}
            max={4}
            step={1}
            onChange={(e) => setCloudCover(parseInt(e.target.value))}
          />
        </div>
        <div className="input mb-2 w-full">
          <label className="label-text my-auto me-3 p-0 w-3/4" htmlFor="icePct">
            Ice Pct:
          </label>
          <input
            type="number"
            className="grow"
            value={icePct}
            id="icePct"
            name="icePct"
            min={0}
            max={100}
            step={10}
            onChange={(e) => setIcePct(parseInt(e.target.value))}
          />
        </div>
        <div className="input mb-2 w-full">
          <label
            className="label-text my-auto me-3 p-0 w-3/4"
            htmlFor="snowCoverPct"
          >
            Snow Cover Pct:
          </label>
          <input
            type="number"
            className="grow"
            value={snowCoverPct}
            id="snowCoverPct"
            name="snowCoverPct"
            min={0}
            max={100}
            step={10}
            onChange={(e) => setSnowCoverPct(parseInt(e.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Create session with these settings
        </button>
      </form>
    </main>
  );
}
