import "./App.css"
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
            <Home />
            <Work />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;