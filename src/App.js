// App.js
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DescriptionModal from "./components/DescriptionModal";
import MediaModal from "./components/MediaModal"; // Import new modal

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [mediaSrc, setMediaSrc] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  // Open text modal
  const openModal = (description) => {
    setModalContent(description);
  };

  // Open media modal
  const openMediaModal = (src, video) => {
    setMediaSrc(src);
    setIsVideo(video);
  };

  // Close all modals
  const closeModal = () => {
    setModalContent(null);
    setMediaSrc(null);
  };

  return (
    <div className="background">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="work">
        <Work openModal={openModal} openMediaModal={openMediaModal} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />

      {/* Modals */}
      {modalContent && (
        <DescriptionModal content={modalContent} closeModal={closeModal} />
      )}
      {mediaSrc && (
        <MediaModal
          mediaSrc={mediaSrc}
          isVideo={isVideo}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
