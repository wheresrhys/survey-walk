export type Sector = {
  id: string;
  name: string;
  parentArea: "Fields" | "Waterworks";
  hasWater: boolean;
};
export const sectors: Sector[] = [
  { id: "overflow", name: "Overflow", parentArea: "Fields", hasWater: false },
  {
    id: "pitch-n-put",
    name: "Pitch'n'Put",
    parentArea: "Fields",
    hasWater: false,
  },
  { id: "riverside", name: "Riverside", parentArea: "Fields", hasWater: true },
  { id: "weir", name: "Weir", parentArea: "Fields", hasWater: true },
  { id: "railway", name: "Railway", parentArea: "Fields", hasWater: false },
  { id: "hornbeams", name: "Hornbeams", parentArea: "Fields", hasWater: false },
  { id: "meadow", name: "Meadow", parentArea: "Waterworks", hasWater: false },
  { id: "woods", name: "Woods", parentArea: "Waterworks", hasWater: false },
  {
    id: "periphery",
    name: "Periphery",
    parentArea: "Waterworks",
    hasWater: false,
  },
  {
    id: "central-circle",
    name: "Central Circle",
    parentArea: "Waterworks",
    hasWater: true,
  },
  {
    id: "side-meadow",
    name: "Side Meadow",
    parentArea: "Waterworks",
    hasWater: false,
  },
  {
    id: "back-woods",
    name: "Back Woods",
    parentArea: "Waterworks",
    hasWater: false,
  },
  {
    id: "back-path",
    name: "Back Path",
    parentArea: "Waterworks",
    hasWater: true,
  },
  { id: "garden", name: "Garden", parentArea: "Waterworks", hasWater: false },
];
