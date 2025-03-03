import "./DescriptionModal.css";

function DescriptionModal({ content, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default DescriptionModal;
