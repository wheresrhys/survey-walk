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

function getTopBirds(sector: string, month: string, dayOfMonth: number): Set<string> {
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
      monthFrequencies[month]?.[sector] >= monthFrequency[month] - 1,
    // Birds seen every year in next month in this sector
    ([, monthFrequencies]) =>
      dayOfMonth >=12 && monthFrequencies[nextMonth]?.[sector] === monthFrequency[nextMonth],
    // Birds seen every year in prev month in this sector
    ([, monthFrequencies]) =>
      dayOfMonth <= 20 && monthFrequencies[prevMonth]?.[sector] === monthFrequency[prevMonth],
    // Birds seen most years in next month in this sector
    ([, monthFrequencies]) =>
      dayOfMonth >= 20 && monthFrequencies[nextMonth]?.[sector] >= monthFrequency[nextMonth] -1 ,
    // Birds seen most years in prev month in this sector
    ([, monthFrequencies]) =>
      dayOfMonth <= 10 && monthFrequencies[prevMonth]?.[sector] >= monthFrequency[prevMonth]- 1,
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

export function getPriorityBirdsMap(date: Date) {

  const monthAsString = String(date.getMonth() + 1).padStart(2, "0");
  const dayOfMonth = date.getDate();
  return Object.fromEntries(
    sectorsList.map(({ id: sectorId }) => [
      sectorId,
      getTopBirds(sectorId, monthAsString, dayOfMonth),
    ]),
  );
}
