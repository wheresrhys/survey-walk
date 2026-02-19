import monthFrequencyData from "@/app/data/month-frequency.json";
import distilledFrequencyData from "@/app/data/frequency-distilled.json";
type MonthLeafNode = {
  total: number;
  totalYears: number;
} & Record<string, number>;

export type SpeciesNode = Record<string, MonthLeafNode>;

type SpeciesMap = Record<string, SpeciesNode>;

export const monthFrequency: Record<string, number> =
  monthFrequencyData as Record<string, number>;
export const distilledHistory: SpeciesMap =
  distilledFrequencyData as unknown as SpeciesMap;
