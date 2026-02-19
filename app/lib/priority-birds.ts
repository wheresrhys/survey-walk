import {
  distilledHistory,
  type SpeciesNode,
  monthFrequency,
} from "@/app/data/frequency-distilled";
import { sectorsList } from "@/app/data/sectors-gazetteer";
import { birdsList } from "@/app/data/bird-taxonomy";

type SpeciesFilter = ([species, data]: [string, SpeciesNode]) => boolean;

function lvrpaNameToShortName(name: string): string | undefined {
  return birdsList.find((bird) => bird.lvrpaName === name)?.shortName;
}

function getTopBirds(sector: string, month: string): Set<string> {
  const nextMonth = String((Number(month) % 12) + 1).padStart(2, "0");
  const prevMonth = String(((Number(month) + 10) % 12) + 1).padStart(2, "0");
  const dataToFilter = Object.entries(distilledHistory);
  const topBirds = new Set<string>();
  const filters: SpeciesFilter[] = [
    // Birds seen in every year in this sector;
    ([, monthFrequencies]) =>
      monthFrequencies[month]?.[sector] === monthFrequency[month],
    // Birds seen in most years in this sector
    ([, monthFrequencies]) =>
      monthFrequencies[month]?.[sector] + 1 >= monthFrequency[month],
    // TODO base these at least partially on day of month
    // Birds seen next month in this sector
    ([, monthFrequencies]) =>
      monthFrequencies[nextMonth]?.[sector] === monthFrequency[nextMonth],
    // Birds seen prev month in this sector
    ([, monthFrequencies]) =>
      monthFrequencies[prevMonth]?.[sector] === monthFrequency[prevMonth],
  ];
  let i = 0;
  while (topBirds.size < 24 && i < filters.length) {
    dataToFilter.filter(filters[i]).forEach(([species]) => {
      const shortName = lvrpaNameToShortName(species);
      if (shortName) {
        topBirds.add(shortName);
      }
    });
    i++;
  }

  return topBirds;
}

export function getPriorityBirdsMap(month: number) {
  const monthAsString = String(month).padStart(2, "0");
  return Object.fromEntries(
    sectorsList.map(({ id: sectorId }) => [
      sectorId,
      getTopBirds(sectorId, monthAsString),
    ]),
  );
}
