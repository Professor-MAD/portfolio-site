import { useEffect } from "react";
import "./ContactGame.css";
import ThrowItems from "./ThrowItems";

function HandPosition({ handPosition, setHandPosition, windowNum, tomatoSelected, eggSelected, boogerSelected }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                setHandPosition((prev) => Math.max(prev - 1, 0));
            } else if (event.key === "ArrowRight") {
                setHandPosition((prev) => Math.min(prev + 1, 2));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setHandPosition]);

    console.log("WindowNum:", windowNum);
    console.log("HandPosition:", handPosition);

    return (
        <div className="window-wrapper">
            {/* Left Window */}
            <div className="window left-window">
                <img
                    alt="face"
                    src="/images/m1.png"
                    className={`face ${windowNum === 0 ? "visible" : ""}`}
                />
                <img
                    alt="hand"
                    src={`${tomatoSelected ? "/images/hand-tomato.png" : ""}`}
                    className={`hand-indicator ${handPosition === 0 ? "visible" : ""}`}
                />
            </div>
            {/* Center Window */}
            <div className="window center-window">
                <img
                    alt="face"
                    src="/images/m2.png"
                    className={`face ${windowNum === 1 ? "visible" : ""}`}
                />
                <img
                    alt="hand"
                    src={`${eggSelected ? "/images/hand-egg.png" : ""}`}
                    className={`hand-indicator ${handPosition === 1 ? "visible" : ""}`}
                />
            </div>
            {/* Right Window */}
            <div className="window right-window">
                <img
                    alt="face"
                    src="/images/m3.png"
                    className={`face ${windowNum === 2 ? "visible" : ""}`}
                />
                <img
                    alt="hand"
                    src={`${boogerSelected ? "/images/hand-booger.png" : ""}`}
                    className={`hand-indicator ${handPosition === 2 ? "visible" : ""}`}
                />
            </div>
        </div>
    );
}

export default HandPosition;
