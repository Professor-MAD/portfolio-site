import "./App.css"
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";

function App() {
    return (
        <div className="background">
            <Header />
            <Home />
            <Work />
        </div>
    );
}

export default App;