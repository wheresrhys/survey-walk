'use client'
import { type BroodData } from "@/app/models/breeding";
import { useState } from "react";

function Brood({ brood, index, onRemove }: { brood: BroodData, index: number, onRemove: (index: number) => void }) {
  return (
    <div>
      {brood.count} {brood.age}
      <button onClick={() => onRemove(index)}>Remove Brood</button>
    </div>
  )
}

export function Broods({ broodsData, sectorId, birdName }: { broodsData: BroodData[], sectorId: string, birdName: string }) {
  const [localBroodsData, setLocalBroodsData] = useState<BroodData[]>(broodsData);
  function addBrood() {
    setLocalBroodsData([...localBroodsData, { count: 1, age: null }]);
  }

  function removeBrood(index: number) {
    setLocalBroodsData((oldDraft: BroodData[]) => oldDraft.splice(index, 1));
  }

  return (
    <div>
      {localBroodsData.map((brood, index) => <Brood brood={brood} key={index} index={index} onRemove={removeBrood}/>)}
      <button onClick={addBrood}>Add Brood</button>
    </div>
  )
}
