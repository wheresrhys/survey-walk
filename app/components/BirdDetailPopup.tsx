import { Bird } from "@/app/models/birds";
export function BirdDetailPopup({ bird }: { bird: Bird }) {
  return (
    <div className="">
      <h1>{bird}</h1>
    </div>
  )
}
