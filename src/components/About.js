import { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 480px)");

    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="about-parent">
      {isMobile ? (
        <div className="teaching-wrapper">
          <div className="nouns-mobile">
            <ul className="noun-item">FATHER</ul>
            <ul className="noun-item">HUSBAND</ul>
            <ul className="noun-item">PROFESSOR</ul>
            <ul className="noun-item">TEACHER</ul>
            <ul className="noun-item">EAGLE SCOUT</ul>
          </div>
          <div className="nouns-mobile">
            <ul className="noun-item">COACH</ul>
            <ul className="noun-item">MENTOR</ul>
            <ul className="noun-item">WRITER</ul>
            <ul className="noun-item">ARTIST</ul>
            <ul className="noun-item">ATHLETE</ul>
          </div>

          <img
            className="teaching"
            src="./images/teaching.jpg"
            alt="teaching"
          />
          <div className="description-parent-mobile">
            <div className="recognition-container-mobile">
              <img
                className="eagle-icon-mobile"
                src="./images/eagle.png"
                alt="eagle"
              />
              <img
                className="rec-icon-mobile"
                src="./images/ecc.png"
                alt="ecc"
              />
              <img className="rec-icon-mobile" src="./images/30.png" alt="30" />
              <img className="rec-icon-mobile" src="./images/bb.png" alt="bb" />
            </div>
            <div className="description-container-mobile">
              <p>
                Thanks for taking the time to visit my portfolio website. When I
                set out to make it, I wanted to answer one question, “What are
                we getting with this guy?”
              </p>
              <p>
                I want you to see the spectrum of my design, including my
                personal predilection toward everything odd and wonderful. I
                venture into these design aesthetics with science-fiction,
                fantasy, horror, and comedy as my backdrops. As a veteran of the
                “dial-up” era of the Internet, my understanding was shaped in a
                simpler but bolder time, when websites did not conform, looked
                different, memorable, and unique. The experience was on the user
                to not only use the website but to feel novelty when visiting. I
                miss that novelty in modern Internet surfing.
              </p>
              <p>
                Novelty is what I strive for, with respect for and inclusion of
                modern design and users. It’s what I will bring to your team. My
                coding style is always focused on simplicity, providing
                easy-to-read code to a range of talent to produce the best
                ultimate product.
              </p>
              <p>
                Now, don’t forget to drop me a line with Splat Attack! Seen
                below.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <img
            className="teaching"
            src="./images/teaching.jpg"
            alt="teaching"
          />
          <div className="nouns">
            <ul className="noun-item">FATHER</ul>
            <ul className="noun-item">HUSBAND</ul>
            <ul className="noun-item">PROFESSOR</ul>
            <ul className="noun-item">TEACHER</ul>
            <ul className="noun-item">EAGLE SCOUT</ul>
            <ul className="noun-item">COACH</ul>
            <ul className="noun-item">MENTOR</ul>
            <ul className="noun-item">WRITER</ul>
            <ul className="noun-item">ARTIST</ul>
            <ul className="noun-item">ATHLETE</ul>
          </div>
        </>
      )}
      <div className="description-parent">
        <div className="recognition-container">
          <img className="eagle-icon" src="./images/eagle.png" alt="eagle" />
          <img className="rec-icon" src="./images/ecc.png" alt="ecc" />
          <img className="rec-icon" src="./images/30.png" alt="30" />
          <img className="rec-icon" src="./images/bb.png" alt="bb" />
        </div>
        <div className="description-container">
          <p>
            Thanks for taking the time to visit my portfolio website. When I set
            out to make it, I wanted to answer one question, “What are we
            getting with this guy?”
          </p>
          <p>
            I want you to see the spectrum of my design, including my personal
            predilection toward everything odd and wonderful. I venture into
            these design aesthetics with science-fiction, fantasy, horror, and
            comedy as my backdrops. As a veteran of the “dial-up” era of the
            Internet, my understanding was shaped in a simpler but bolder time,
            when websites did not conform, looked different, memorable, and
            unique. The experience was on the user to not only use the website
            but to feel novelty when visiting. I miss that novelty in modern
            Internet surfing.
          </p>
          <p>
            Novelty is what I strive for, with respect for and inclusion of
            modern design and users. It’s what I will bring to your team. My
            coding style is always focused on simplicity, providing easy-to-read
            code to a range of talent to produce the best ultimate product.
          </p>
          <p>
            Now, don’t forget to drop me a line with Splat Attack! Seen below.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
