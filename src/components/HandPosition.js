import { useEffect } from "react";
import "./ContactGame.css";

function HandPosition({ handPosition, setHandPosition, windowNum }) {
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

    return (
        <div className="window-wrapper">
            <div
                className={`window left-window ${windowNum === 0 ? "show-face" : ""} ${
                    handPosition === 0 ? "active" : ""
                }`}
            >
                <img alt="left" src="/images/m1.png" />
            </div>
            <div
                className={`window center-window ${windowNum === 1 ? "show-face" : ""} ${
                    handPosition === 1 ? "active" : ""
                }`}
            >
                <img alt="center" src="/images/m2.png" />
            </div>
            <div
                className={`window right-window ${windowNum === 2 ? "show-face" : ""} ${
                    handPosition === 2 ? "active" : ""
                }`}
            >
                <img alt="right" src="/images/m3.png" />
            </div>
        </div>
    );
}

export default HandPosition;

