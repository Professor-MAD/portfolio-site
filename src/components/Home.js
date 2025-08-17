import { useState } from 'react';
import './Home.css';

function Home() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleButtonClick = () => {
    // Add a subtle click effect
    const button = document.querySelector('.projects-button');
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    }
    scrollToSection('work');
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <div className="Im">I&apos;m</div>
        <div className="name">MICHAEL DIOGUARDI</div>
        <div className="description">
          A multi-disciplinary developer with a passion for creating beautiful
          and functional digital experiences.
        </div>
        <button
          className="projects-button"
          onClick={handleButtonClick}
          aria-label="View my projects"
        >
          See My Projects
        </button>
      </div>
      <div className="home-right">
        <img
          className="avatar"
          src={
            isAvatarHovered
              ? './images/devil-avatar.png'
              : './images/avatar.png'
          }
          alt="Michael Dioguardi - Full Stack Developer"
          onMouseEnter={() => setIsAvatarHovered(true)}
          onMouseLeave={() => setIsAvatarHovered(false)}
          loading="eager"
        />
      </div>
    </div>
  );
}

export default Home;
