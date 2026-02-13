import { Bird } from "@/app/models/birds";
import {useSurveyDispatch, type BirdData} from '@/app/components/SurveyProvider';
import { breedingCodes, type BreedingCode } from "@/app/models/breeding";
import { Broods } from "@/app/components/Broods";
import { Modal } from '@/app/components/Modal';
export function BirdDetailPopup({ birdName, birdData, sectorId, onClose }: { birdName: string, birdData: BirdData, sectorId: string, onClose: () => void }) {
  const dispatch = useSurveyDispatch();
  function handleCountChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'UPDATE_BIRD_COUNT', sectorId, birdName, count: parseInt(event.target.value) });
  }
  function handleNotesChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch({ type: 'UPDATE_BIRD_NOTES', sectorId, birdName, notes: event.target.value });
  }
  function toggleBreedingCode(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'UPDATE_BIRD_BREEDING_CODES', sectorId, birdName, breedingCode: event.target.id, checked: event.target.checked });
  }
  return (<Modal title={birdName} onClose={onClose}>
      <div className="modal-body">
         <h1>{birdName}</h1>
      <form>
        <div className="input max-w-sm">
          <label className="label-text my-auto me-3 p-0" htmlFor="inlineLabelName">Count:</label>
          <input type="number" className="grow" value={birdData.count} id="inlineLabelName" onChange={handleCountChange}/>
        </div>
        <textarea className="textarea max-w-sm" aria-label="Textarea" value={birdData.notes} onChange={handleNotesChange}/>

        <Broods broodsData={birdData.broods} sectorId={sectorId} birdName={birdName}/>
        <div className="flex gap-4 overflow-x-auto">
          {Object.entries(breedingCodes).map(([breedingCode, text]) => <div key={breedingCode} className="flex items-center gap-2">
            <input type="checkbox" name="breeding-codes" className="checkbox checkbox-primary" id={breedingCode} checked={birdData.breedingCodes.includes(breedingCode as BreedingCode)} onChange={toggleBreedingCode}/>
            <label className="label-text text-xs" htmlFor={breedingCode}> {text} </label>
          </div>)}
        </div>
        {/* <div className="max-w-32" data-input-number>
          <label className="label-text  my-auto " htmlFor="number-input-mini"></label>
          <div className="input items-center">
            <button type="button" className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Decrement button" data-input-number-decrement >
              <span className="icon-[tabler--minus] size-3.5 shrink-0"></span>
            </button>
            <input className="text-center" type="number" defaultValue={birdData.count} aria-label="Mini stacked buttons" data-input-number-input id="number-input-mini" />
            <button type="button" className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0" aria-label="Increment button" data-input-number-increment >
              <span className="icon-[tabler--plus] size-3.5 shrink-0"></span>
            </button>
          </div>
        </div> */}

      </form>

      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-soft btn-secondary" data-overlay="#basic-modal" onClick={onClose}>Close</button>
      </div>
    </Modal>
  )
}




