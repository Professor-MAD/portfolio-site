import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DescriptionModal from "./components/DescriptionModal"; // Import Modal

function App() {
  const [modalContent, setModalContent] = useState(null);

  // Function to open modal
  const openModal = (description) => {
    setModalContent(description);
  };

  // Function to close modal
  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="background">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="work">
        {/* Pass openModal function down to Work component */}
        <Work openModal={openModal} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />

      {/* Show modal only if there is content */}
      {modalContent && (
        <DescriptionModal content={modalContent} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
