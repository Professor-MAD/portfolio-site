import React from "react";
import "./WorkContainer.css";
import workContent from "./WorkContent";
import WorkItem from "./WorkItem";

function WorkContainer() {
    return (
        <div>
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
                />
            ))}
        </div>
    );
}

export default WorkContainer;
