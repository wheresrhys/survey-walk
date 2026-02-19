export type SectorMetadata = {
  id: string;
  name: string;
  parentArea: "Fields" | "Waterworks";
  hasWater: boolean;
};
export const sectorsList: SectorMetadata[] = [
  { id: "fields-1", name: "Overflow", parentArea: "Fields", hasWater: false },
  {
    id: "fields-2",
    name: "Pitch'n'Put",
    parentArea: "Fields",
    hasWater: false,
  },
  { id: "fields-3", name: "Riverside", parentArea: "Fields", hasWater: true },
  { id: "fields-4", name: "Weir", parentArea: "Fields", hasWater: true },
  { id: "fields-5", name: "Railway", parentArea: "Fields", hasWater: false },
  { id: "fields-6", name: "Hornbeams", parentArea: "Fields", hasWater: false },
  {
    id: "waterworks-1",
    name: "Meadow",
    parentArea: "Waterworks",
    hasWater: false,
  },
  {
    id: "waterworks-2",
    name: "Woods",
    parentArea: "Waterworks",
    hasWater: false,
  },
  {
    id: "waterworks-3",
    name: "Periphery",
    parentArea: "Waterworks",
    hasWater: false,
  },
  {
    id: "waterworks-4",
    name: "Circle",
    parentArea: "Waterworks",
    hasWater: true,
  },
  {
    id: "waterworks-5",
    name: "Side Meadow",
    parentArea: "Waterworks",
    hasWater: false,
  },
  {
    id: "waterworks-6",
    name: "Back Woods",
    parentArea: "Waterworks",
    hasWater: false,
  },
  {
    id: "waterworks-7",
    name: "Back Path",
    parentArea: "Waterworks",
    hasWater: true,
  },
  {
    id: "waterworks-8",
    name: "Garden",
    parentArea: "Waterworks",
    hasWater: false,
  },
];
