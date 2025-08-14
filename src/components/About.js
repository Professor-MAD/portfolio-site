import './About.css';

function About() {
  const roles = [
    'FATHER',
    'HUSBAND',
    'PROFESSOR',
    'TEACHER',
    'EAGLE SCOUT',
    'COACH',
    'MENTOR',
    'WRITER',
    'ARTIST',
    'ATHLETE',
  ];

  const achievements = [
    { icon: './images/eagle.png', alt: 'Eagle Scout' },
    { icon: './images/ecc.png', alt: 'ECC' },
    { icon: './images/30.png', alt: '30' },
    { icon: './images/bb.png', alt: 'BB' },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="image-container">
              <img
                className="profile-image"
                src="./images/teaching.jpg"
                alt="Teaching and mentoring"
              />
              <div className="image-overlay"></div>
            </div>

            <div className="roles-container">
              <h2 className="roles-title">WHO I AM</h2>
              <div className="roles-grid">
                {roles.map((role, index) => (
                  <div key={index} className="role-item">
                    <span className="role-text">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <div className="achievements-container">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <img
                  src={achievement.icon}
                  alt={achievement.alt}
                  className="achievement-icon"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="description-section">
          <div className="description-container">
            <div className="description-content">
              <p className="description-text">
                Thanks for taking the time to visit my portfolio website. When I
                set out to make it, I wanted to answer one question, &quot;What
                are we getting with this guy?&quot;
              </p>

              <p className="description-text">
                I want you to see the spectrum of my design, including my
                personal predilection toward everything odd and wonderful. I
                venture into these design aesthetics with science-fiction,
                fantasy, horror, and comedy as my backdrops. As a veteran of the
                &quot;dial-up&quot; era of the Internet, my understanding was
                shaped in a simpler but bolder time, when websites did not
                conform, looked different, memorable, and unique. The experience
                was on the user to not only use the website but to feel novelty
                when visiting. I miss that novelty in modern Internet surfing.
              </p>

              <p className="description-text">
                Novelty is what I strive for, with respect for and inclusion of
                modern design and users. It&apos;s what I will bring to your
                team. My coding style is always focused on simplicity, providing
                easy-to-read code to a range of talent to produce the best
                ultimate product.
              </p>

              <p className="description-text highlight">
                Now, don&apos;t forget to drop me a line with Splat Attack! Seen
                below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
