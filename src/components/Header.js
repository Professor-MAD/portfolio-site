import "./Header.css";

function Header() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="header-container">
            <div className="header-left"></div>
            <div className="header-right">
                <div className="home-button" onClick={() => scrollToSection("home")}>HOME</div>
                <div className="work-button" onClick={() => scrollToSection("work")}>WORK</div>
                <div className="about-button" onClick={() => scrollToSection("about")}>ABOUT</div>
                <div className="contact-button" onClick={() => scrollToSection("contact")}>CONTACT</div>
            </div>
        </div>
    );
}

export default Header;
