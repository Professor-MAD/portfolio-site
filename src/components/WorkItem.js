// WorkItem.js
import { ExternalLink, Expand } from 'lucide-react';
import useIsMobile from './hooks/useIsMobile';
import './WorkContainer.css';

function WorkItem({
  title,
  logo,
  screenshot,
  github,
  link,
  icons,
  description,
  fontFamily,
  useVideo,
  openModal,
  openMediaModal,
}) {
  const isMobile = useIsMobile();

  return (
    <div className="work-container">
      {!isMobile && (
        <div className="container-left">
          <img className="project-logo" src={logo} alt={title} />
          {useVideo ? (
            <video
              className="project-screenshot"
              src={screenshot}
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              className="project-screenshot"
              src={screenshot}
              alt={`${title} Screenshot`}
            />
          )}

          {/* Overlay Icons */}
          <div className="screenshot-overlay">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="overlay-icon" />
            </a>
            <span onClick={() => openMediaModal(screenshot, useVideo)}>
              <Expand className="overlay-icon" />
            </span>
          </div>
        </div>
      )}

      <div className="container-right">
        <div
          className="project-title"
          style={{
            fontFamily: `var(--font-${fontFamily.toLowerCase().replace(/\s+/g, '')})`,
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

        {isMobile && (
          <div className="mobile-screenshot-wrapper">
            {useVideo ? (
              <video
                className="mana-mind-screenshot-mobile"
                src={screenshot}
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
            <div className="mobile-screenshot-overlay">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="overlay-icon-mobile" />
              </a>
              <span onClick={() => openMediaModal(screenshot, useVideo)}>
                <Expand className="overlay-icon-mobile" />
              </span>
            </div>
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
            </div>
            <div className="text" onClick={() => openModal(description)}>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkItem;
