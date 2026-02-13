export function Modal({
  children,
  title,
  onClose,
}: {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}) {
  return (
    <>
      <div
        data-overlay-backdrop-template=""
        className="z-79 overlay-backdrop transition duration-300 fixed inset-0 bg-base-300/60 overflow-y-auto "
      />

      <div
        id="basic-modal"
        className="overlay modal overlay-open:opacity-100 overlay-open:duration-300 z-80 open opened"
        role="dialog"
        tabIndex={-1}
      >
        <div className="modal-dialog max-w-none">
          <div className="modal-content h-full max-h-none justify-start">
            <div className="modal-header">
              <h3 className="modal-title">{title}</h3>
              <button
                type="button"
                className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
                aria-label="Close"
                data-overlay="#basic-modal"
                onClick={onClose}
              >
                <span className="icon-[tabler--x] size-4"></span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
