import "./Work.css";
import WorkContainer from "./WorkContainer";

function Work({ openModal }) {
  // Fix typo in prop name
  return (
    <div className="work-parent">
      <WorkContainer openModal={openModal} /> {/* Pass openModal */}
    </div>
  );
}

export default Work;
