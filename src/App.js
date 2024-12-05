import "./App.css"
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";

function App() {
    return (
        <div className="background">
            <Header />
            <Home />
            <Work />
            <About />
        </div>
    );
}

export default App;