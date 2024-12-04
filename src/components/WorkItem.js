import React from "react";
import "./WorkContainer.css";

function WorkItem({ title, logo, screenshot, github, link, icons, description }) {
    return (
        <div className="work-container">
            <div className="container-left">
                <img className="mana-mind" src={logo} alt={title} />
            </div>
            <div className="container-right">
                <div className="container-right-top">
                    {title}
                    <img className="github" src={github} alt="GitHub" />
                    <img className="link" src={link} alt="Link" />
                </div>
                <div className="container-right-bottom">
                    <img
                        className="mana-mind-screenshot"
                        src={screenshot}
                        alt={`${title} Screenshot`}
                    />
                    <div className="work-content">
                        <div className="icon-row">
                            {icons.map((icon, index) => (
                                <img className="icon" src={icon} alt={`icon-${index}`} key={index} />
                            ))}
                        </div>
                        <div className="text">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkItem;
