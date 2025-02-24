import useIsMobile from "./hooks/useIsMobile";
import "./WorkContainer.css";

function WorkItem({
  title,
  logo,
  screenshot,
  github,
  link,
  icons,
  description,
  fontFamily,
  fontSize,
  desktopFontSize,
  useVideo, // New prop to determine if video or image should be used
}) {
  const isMobile = useIsMobile();

  return (
    <div className="work-container">
      {/* Only show this in non-mobile view */}
      {!isMobile && (
        <div className="container-left">
          <img className="mana-mind" src={logo} alt={title} />
          {useVideo ? (
            <video
              className="mana-mind-screenshot"
              src={screenshot}
              alt={`${title} Screenshot`}
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              className="mana-mind-screenshot"
              src={screenshot}
              alt={`${title} Screenshot`}
            />
          )}
        </div>
      )}

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

        {/* Mobile-specific JSX */}
        {isMobile && (
          <div className="mobile-screenshot-wrapper">
            {useVideo ? (
              <video
                className="mana-mind-screenshot-mobile"
                src={screenshot}
                alt={`${title} Screenshot`}
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                className="mana-mind-screenshot-mobile"
                src={screenshot}
                alt={`${title} Screenshot`}
              />
            )}
            <img className="mana-mind-logo-mobile" src={logo} alt={title} />
          </div>
        )}

        <div className="container-right-bottom">
          <div className="work-content">
            <div className="icon-row">
              {icons.map((icon, index) => (
                <img
                  className="icon"
                  src={icon}
                  alt={`icon-${index}`}
                  key={index}
                />
              ))}
              {isMobile && (
                <div className="mobile-icons-wrapper">
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <img
                      className="github-mobile"
                      src="/images/github.png"
                      alt="GitHub"
                    />
                  </a>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                      className="link-mobile"
                      src="/images/link.png"
                      alt="Link"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="text">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkItem;
