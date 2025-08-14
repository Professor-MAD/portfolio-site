import './Work.css';
import WorkContainer from './WorkContainer';

function Work({ openModal, openMediaModal }) {
  return (
    <div className="work-parent">
      <WorkContainer openModal={openModal} openMediaModal={openMediaModal} />
    </div>
  );
}

export default Work;
