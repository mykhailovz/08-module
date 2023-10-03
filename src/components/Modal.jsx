export default function Modal({ modalId, children }) {
  return (
    <>
      <dialog id={modalId} className="modal">
        <div method="dialog" className="modal-box">
          {children}
        </div>
      </dialog>
    </>
  );
}
