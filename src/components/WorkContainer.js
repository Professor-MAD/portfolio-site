import "./WorkContainer.css";
import workContent from "./WorkContent";
import WorkItem from "./WorkItem";

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
          desktopFontSize={project.desktopFontSize}
          useVideo={project.useVideo}
          openModal={openModal}
          openMediaModal={openMediaModal} // Pass down the function
        />
      ))}
    </div>
  );
}

export default WorkContainer;
