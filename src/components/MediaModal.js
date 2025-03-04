// MediaModal.js
import "./MediaModal.css";

function MediaModal({ mediaSrc, isVideo, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        {isVideo ? (
          <video
            className="modal-media"
            src={mediaSrc}
            controls
            autoPlay
            loop
          />
        ) : (
          <img className="modal-media" src={mediaSrc} alt="Expanded Media" />
        )}
      </div>
    </div>
  );
}

export default MediaModal;
