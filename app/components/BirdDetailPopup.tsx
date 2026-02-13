import { Bird } from "@/app/models/birds";
import {useSurvey} from '@/app/components/SurveyProvider';
export function BirdDetailPopup({ birdName, sectorId, onClose }: { birdName: string, sectorId: string, onClose: () => void }) {
  const surveyData = useSurvey();
  const birdData = surveyData[sectorId][birdName];
  return (<>
    <div data-overlay-backdrop-template="" className="z-79 overlay-backdrop transition duration-300 fixed inset-0 bg-base-300/60 overflow-y-auto "></div>
    <div id="basic-modal" className="overlay modal overlay-open:opacity-100 overlay-open:duration-300 z-80 open opened" role="dialog" tabIndex={-1}>

  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="modal-title">Dialog Title</h3>
        <button type="button" className="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#basic-modal" onClick={onClose}>
          <span className="icon-[tabler--x] size-4"></span>
        </button>
      </div>
      <div className="modal-body">
         <h1>{birdName}</h1>
      <p>count: {birdData}</p>
      </div>
      <div className="modal-footer">
            <button type="button" className="btn btn-soft btn-secondary" data-overlay="#basic-modal" onClick={onClose}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </>
  )
}




