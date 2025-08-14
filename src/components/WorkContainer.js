import './WorkContainer.css';
import workContent from './WorkContent';
import WorkItem from './WorkItem';

function WorkContainer({ openModal, openMediaModal }) {
  return (
    <div className="container-wrap">
      {workContent.map((project, index) => (
        <WorkItem
          key={index}
          title={project.title}
          logo={project.logo}
          screenshot={project.screenshot}
          github={project.github}
          link={project.link}
          icons={project.icons}
          description={project.description}
          fontFamily={project.fontFamily}
          fontSize={project.fontSize}
          useVideo={project.useVideo}
          openModal={openModal}
          openMediaModal={openMediaModal}
        />
      ))}
    </div>
  );
}

export default WorkContainer;
