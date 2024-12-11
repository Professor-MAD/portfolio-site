import "./WorkContainer.css";

function WorkItem({ title, logo, screenshot, github, link, icons, description, fontFamily, fontSize, desktopFontSize }) {
    return (
        <div className="work-container">
            <div className="container-left">
                <img className="mana-mind" src={logo} alt={title} />
                <img
                    className="mana-mind-screenshot"
                    src={screenshot}
                    alt={`${title} Screenshot`}
                />
            </div>
            <div className="container-right">
                <div
                    className="container-right-top"
                    style={{
                        fontFamily: fontFamily,
                        fontSize: `clamp(${fontSize}, calc(${fontSize} + 2vw), ${desktopFontSize})`,
                    }}
                >
                    {title}
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <img className="github" src="/images/github.png" alt="GitHub" />
                    </a>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img className="link" src="/images/link.png" alt="Link" />
                    </a>
                </div>
                <div className="container-right-bottom">
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
