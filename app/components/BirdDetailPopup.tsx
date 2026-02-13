import { useSurveyDispatch } from "@/app/components/SurveyProvider";
import {
  breedingCodes,
  type BreedingCode,
  type BirdSurveyData,
} from "@/app/models/survey";
import { Broods } from "@/app/components/Broods";
import { Modal } from "@/app/components/Modal";

export function BirdDetailPopup({
  birdName,
  birdData,
  sectorId,
  onClose,
}: {
  birdName: string;
  birdData: BirdSurveyData;
  sectorId: string;
  onClose: () => void;
}) {
  const dispatch = useSurveyDispatch();
  function handleCountChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "UPDATE_BIRD_COUNT",
      sectorId,
      birdName,
      count: parseInt(event.target.value),
    });
  }
  function handleNotesChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch({
      type: "UPDATE_BIRD_NOTES",
      sectorId,
      birdName,
      notes: event.target.value,
    });
  }
  function toggleBreedingCode(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "UPDATE_BIRD_BREEDING_CODES",
      sectorId,
      birdName,
      breedingCode: event.target.id,
      checked: event.target.checked,
    });
  }
  return (
    <Modal title={birdName} onClose={onClose}>
      <form>
        <div className="input max-w-sm mb-2 w-1/2">
          <label
            className="label-text my-auto me-3 p-0"
            htmlFor="inlineLabelName"
          >
            Count:
          </label>
          <input
            type="number"
            className="grow"
            value={birdData.count}
            id="inlineLabelName"
            onChange={handleCountChange}
          />
        </div>
        <textarea
          className="textarea max-w-sm mb-2"
          aria-label="Textarea"
          placeholder="Notes"
          value={birdData.notes}
          onChange={handleNotesChange}
        />

        <Broods
          broodsData={birdData.broods}
          sectorId={sectorId}
          birdName={birdName}
          dispatch={dispatch}
        />
        <div className="flex gap-4 flex-wrap">
          {Object.entries(breedingCodes).map(([breedingCode, text]) => (
            <div key={breedingCode} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="breeding-codes"
                className="checkbox checkbox-primary"
                id={breedingCode}
                checked={birdData.breedingCodes.includes(
                  breedingCode as BreedingCode,
                )}
                onChange={toggleBreedingCode}
              />
              <label className="label-text text-xs" htmlFor={breedingCode}>
                {text}
              </label>
            </div>
          ))}
        </div>
      </form>
    </Modal>
  );
}
