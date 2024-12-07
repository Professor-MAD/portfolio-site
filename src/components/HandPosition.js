import { useEffect } from "react";
import "./ContactGame.css";

function HandPosition({ handPosition, setHandPosition, windowNum, selectedThrowItem, isMobile }) {
    useEffect(() => {
        if (!isMobile) {
            const handleKeyDown = (event) => {
                if (event.key === "ArrowLeft") {
                    setHandPosition((prev) => Math.max(prev - 1, 0));
                } else if (event.key === "ArrowRight") {
                    setHandPosition((prev) => Math.min(prev + 1, 2));
                }
            };

            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }
    }, [setHandPosition, isMobile]);

    return (
        <div className="window-wrapper">
            {[0, 1, 2].map((num) => (
                <div
                    key={num}
                    className={`window ${["left", "center", "right"][num]}-window`}
                    onClick={() => isMobile && setHandPosition(num)} // Handle tap or click for mobile
                >
                    <img
                        alt="face"
                        src={`/images/m${num + 1}.png`}
                        className={`face ${windowNum === num ? "visible" : ""}`}
                    />
                    <img
                        alt="hand"
                        src={`/images/hand-${selectedThrowItem || "tomato"}.png`}
                        className={`hand-indicator ${handPosition === num ? "visible" : ""}`}
                    />
                </div>
            ))}
        </div>
    );
}

export default HandPosition;
