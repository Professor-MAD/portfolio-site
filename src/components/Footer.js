import "./Footer.css";

function Footer() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="footer">
            {/* Wave Layers */}
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>

            {/* Social Icons */}
            <div className="info-container">
                <ul className="social-icon">
                    <li className="social-icon__item">
                        <div className="social-icon__link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </div>
                    </li>
                    <li className="social-icon__item">
                        <div className="social-icon__link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                    </li>
                    <li className="social-icon__item">
                        <div className="social-icon__link">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                    </li>
                    <li className="social-icon__item">
                        <div className="social-icon__link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </li>
                </ul>

                {/* Menu Links */}
                <ul className="menu">
                    <li className="menu__item">
                        <div
                            className="menu__link"
                            onClick={() => scrollToSection("home")}
                        >
                            Home
                        </div>
                    </li>
                    <li className="menu__item">
                        <div
                            className="menu__link"
                            onClick={() => scrollToSection("work")}
                        >
                            Work
                        </div>
                    </li>
                    <li className="menu__item">
                        <div
                            className="menu__link"
                            onClick={() => scrollToSection("about")}
                        >
                            About
                        </div>
                    </li>
                    <li className="menu__item">
                        <div
                            className="menu__link"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </div>
                    </li>
                </ul>

                {/* Footer Text */}
                <p>&copy;2024 Michael Dioguardi | All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
