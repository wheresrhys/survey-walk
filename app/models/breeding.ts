export type BroodAge = "chick" | "fledgling" | "juv";

export type BreedingCode =
  | "P"
  | "N"
  | "B"
  | "UN"
  | "FL"
  | "ON"
  | "FF"
  | "NE"
  | "NY";

export type BroodData = {
  count: number;
  age: BroodAge | null;
};

export const breedingCodes = {
  P: "Pair in habitat",
  N: "Near likely nest",
  B: "Nest Building",
  FF: "Carry food/shit",
  FL: "Fledged Young",
  UN: "Used nest or eggs",
  ON: "Occupied Nest",
  NE: "Nest with Eggs",
  NY: "Nest with Young",
};
