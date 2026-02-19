import { distilledHistory, type SpeciesNode, monthFrequency } from "@/app/data/frequency-distilled";
import { sectorsList } from "@/app/data/sectors-gazetteer";

type SpeciesFilter = ([species, data]: [string, SpeciesNode]) => boolean;

function getTopBirds(sector: string, month: string): Set<string> {
  const nextMonth = String((Number(month) % 12) + 1).padStart(2, "0");
  const prevMonth = String(((Number(month) + 10) % 12) + 1).padStart(2, "0");
  const dataToFilter = Object.entries(distilledHistory);
  const topBirds = new Set<string>();
  const filters: SpeciesFilter[] = [
    // Birds seen in every year in this sector;
    ([species, data]) =>
      data[month]?.[sector] === monthFrequency[month],
    // Birds seen in most years in this sector
    ([species, data]) =>
      data[month]?.[sector] + 1 >= monthFrequency[month],
    // Birds seen next month in this sector
    ([species, data]) =>
      data[nextMonth]?.[sector] === monthFrequency[nextMonth],
    // Birds seen prev month in this sector
    ([species, data]) =>
      data[prevMonth]?.[sector] === monthFrequency[prevMonth],
  ];
  let i = 0;
  while (topBirds.size < 24 && i < filters.length) {
    dataToFilter
      .filter(filters[i])
      .forEach(([species]) => topBirds.add(species));
    i++;
  }

  return topBirds;
}

export function getPriorityBirdsMap(month: number) {
  const monthAsString = String(month).padStart(2, "0");
  return Object.fromEntries(
    sectorsList.map(({id: sectorId}) => ([
      sectorId,
      getTopBirds(sectorId, monthAsString),
    ])),
  );
}

