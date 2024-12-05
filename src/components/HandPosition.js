import { useEffect } from "react";
import "./ContactGame.css";

function HandPosition({ handPosition, setHandPosition }) {
    // Handle arrow key input
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                setHandPosition((prev) => Math.max(prev - 1, 0)); // Move left, min 0
            } else if (event.key === "ArrowRight") {
                setHandPosition((prev) => Math.min(prev + 1, 2)); // Move right, max 2
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setHandPosition]);

    return (
        <div className="window-wrapper">
            <div
                className={`window left-window ${
                    handPosition === 0 ? "active" : ""
                }`}
            >
                Left
            </div>
            <div
                className={`window center-window ${
                    handPosition === 1 ? "active" : ""
                }`}
            >
                Center
            </div>
            <div
                className={`window right-window ${
                    handPosition === 2 ? "active" : ""
                }`}
            >
                Right
            </div>
        </div>
    );
}

export default HandPosition;
