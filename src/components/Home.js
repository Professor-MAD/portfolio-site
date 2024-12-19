import { useState } from "react";
import "./Home.css";

function Home() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <div className="Im">I'm</div>
        <div className="name">MICHAEL DIOGUARDI</div>
        <div className="description">
          A coding jack with a focus on developing front-end designs that are
          simple and memorable.
        </div>
        <div
          className="projects-button"
          onClick={() => scrollToSection("work")}
        >
          See My Projects
        </div>
      </div>
      <div className="home-right">
        <img
          className="avatar"
          src={
            isAvatarHovered
              ? "./images/devil-avatar.png"
              : "./images/avatar.png"
          }
          alt="avatar"
          onMouseEnter={() => setIsAvatarHovered(true)}
          onMouseLeave={() => setIsAvatarHovered(false)}
        />
      </div>
    </div>
  );
}

export default Home;
