"use client";
import { useSurvey } from "@/app/components/SurveyProvider";
import { tallyUp } from "@/app/lib/tally-up";
import { sectorsList } from "@/app/data/sectors-gazetteer";
import Link from "next/link";
export default function TableView() {
  const surveyData = useSurvey();
  const globalBirdTally = tallyUp(surveyData, () => true);
  return (
    <main className="m-2">
      <Link className="btn btn-primary" href="/">
        Back to survey
      </Link>
      <div className="w-full overflow-x-auto mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>Species</th>
              {sectorsList.map(({ id, name }) => (
                <th key={id}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(globalBirdTally).map(([birdName, birdTally]) =>
              birdTally.count > 0 ? (
                <tr key={birdName}>
                  <th>{birdName}</th>
                  {sectorsList.map(({ id }) => (
                    <td key={id}>
                      {surveyData.sectors[id].birds[birdName].count}
                    </td>
                  ))}
                </tr>
              ) : null,
            )}
          </tbody>
        </table>
      </div>
      <Link className="btn btn-primary mt-4" href="/">
        Back to survey
      </Link>
    </main>
  );
}
