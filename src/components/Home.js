import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <div className="home-left">
                <div className="I'm"></div>
                <div className="name"></div>
                <div className="description"></div>
                <div className="projects-button"></div>
            </div>
            <div className="home-right">
                <img className="avatar" src="avatar.png" alt="avatar" />
            </div>
        </div>
    );
}

export default Home;