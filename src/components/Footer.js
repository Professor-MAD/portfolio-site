import "./Footer.css";

function Footer() {
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
                    <a className="social-icon__link" href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
            </ul>

             {/* Menu Links */}
             <ul className="menu">
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        Home
                    </a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        About
                    </a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        Services
                    </a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        Team
                    </a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        Contact
                    </a>
                </li>
            </ul>

            {/* Footer Text */}
            <p>&copy;2024 Your Name | All Rights Reserved</p>
            </div>
            

           
        </footer>
    );
}

export default Footer;
