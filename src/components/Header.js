import "./Header.css"

function Header() {
    return(
        <div className="header-container">
            <div className="header-left">
                DIOGUARDI
            </div>
            <div className="header-right">
                <div className="home-button">HOME</div>
                <div className="work-button">WORK</div>
                <div className="about-button">ABOUT</div>
                <div className="contact-button">CONTACT</div>
            </div>
        </div>
    );
}

export default Header;