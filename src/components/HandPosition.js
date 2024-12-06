import { useEffect } from "react";
import "./ContactGame.css";

function HandPosition({ handPosition, setHandPosition }) {

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
            <img alt="left" src="/images/m1.png" className={`window left-window ${
                    handPosition === 0 ? "active" : ""
                }`} />
            <img alt="center" src="/images/m2.png" className={`window center-window ${
                    handPosition === 1 ? "active" : ""
                }`}/>
            <img alt="right" src="/images/m3.png" className={`window right-window ${
                    handPosition === 2 ? "active" : ""
                }`} />        
        </div>
    );
}

export default HandPosition;
