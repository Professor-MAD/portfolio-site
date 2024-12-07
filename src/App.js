import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="background">
            <Header />
            <div id="home">
                <Home />
            </div>
            <div id="work">
                <Work />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
