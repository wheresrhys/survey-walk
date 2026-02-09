export type Sector = {
  id: string;
  name: string;
  parentArea: "Fields" | "Waterworks"
  hasWater: boolean;
}
export const sectors: Sector[] = [
  { id: "overflow", name: "Overflow", parentArea: "Fields", hasWater: false },
  { id: "pitch-n-put", name: "Pitch'n'Put", parentArea: "Fields", hasWater: false },
  { id: "riverside", name: "Riverside", parentArea: "Fields", hasWater: true },
  { id: "weir", name: "Weir", parentArea: "Fields", hasWater: true },
  { id: "railway", name: "Railway", parentArea: "Fields", hasWater: false },
  { id: "hornbeams", name: "Hornbeams", parentArea: "Fields", hasWater: false },
  { id: "meadow", name: "Meadow", parentArea: "Fields", hasWater: false },
  { id: "woods", name: "Woods", parentArea: "Fields", hasWater: false },
  { id: "periphery", name: "Periphery", parentArea: "Fields", hasWater: false },
  { id: "central-circle", name: "Central Circle", parentArea: "Fields", hasWater: true },
  { id: "side-meadow", name: "Side Meadow", parentArea: "Fields", hasWater: false },
  { id: "back-woods", name: "Back Woods", parentArea: "Fields", hasWater: false },
  { id: "back-path", name: "Back Path", parentArea: "Fields", hasWater: true },
  { id: "garden", name: "Garden", parentArea: "Fields", hasWater: false },
]
