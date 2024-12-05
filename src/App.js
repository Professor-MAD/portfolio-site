import "./App.css"
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import ContactGame from "./components/ContactGame";

function App() {
    return (
        <div className="background">
            <Header />
            <Home />
            <Work />
            <About />
            <ContactGame />
        </div>
    );
}

export default App;