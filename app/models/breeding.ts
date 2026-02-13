export type BroodAge = 'chick' | 'fledgling' | 'juv';

export type BreedingCode = 'P' | 'N' | 'B' | 'UN' | 'FL' | 'ON' | 'FF' | 'NE' | 'NY';

export type BroodData = {
  count: number;
  age: BroodAge | null;
}

export const breedingCodes = {
  P: 'Pair in habitat',
  N: 'Visiting probable nest',
  B: 'Nest Building',
  FF: 'Food / Faecal sac',
  FL: 'Fledged Young',
  UN: 'Used Nest or eggshells',
  ON: 'Occupied Nest',
  NE: 'Nest with Eggs',
  NY: 'Nest with Young',
};
