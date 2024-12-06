import { useState, useEffect } from "react";
import "./ContactGame.css";
import HandPosition from "./HandPosition";
import ThrowItems from "./ThrowItems";

function ContactGame() {
    const [gameStart, setGameStart] = useState(false);
    const [gameIsWon, setGameIsWon] = useState(false);
    const [revealSplat, setRevealSplat] = useState(false);
    const [windowNum, setWindowNum] = useState(null);
    const [timer, setTimer] = useState(0);
    const [handPosition, setHandPosition] = useState(0);
    const [selectedThrowItem, setSelectedThrowItem] = useState("tomato");

    useEffect(() => {
        if (gameStart) {
            const intervalId = setInterval(() => {
                const randomNum = Math.floor(Math.random() * 3);
                setWindowNum(randomNum);
                setTimer((prev) => prev + 0.5);
            }, 500);

            return () => clearInterval(intervalId);
        }
    }, [gameStart]);

    const handleClickFire = () => {
        if (windowNum === handPosition) {
            setGameIsWon(true);
            setRevealSplat(true);
        }
    };

    return (
        <div className="contact-game-wrapper">
            {revealSplat && (
                <img
                    className="splat-image"
                    src={`/images/${selectedThrowItem}-splat.png`}
                    alt="Splat"
                    onClick={() => setRevealSplat(false)}
                />
            )}
            <HandPosition
                handPosition={handPosition}
                setHandPosition={setHandPosition}
                windowNum={windowNum}
                selectedThrowItem={selectedThrowItem}
            />
            <div className="action-holder">
                <ThrowItems setSelectedThrowItem={setSelectedThrowItem} />
                <div className="fire-button" onClick={handleClickFire}>
                    FIRE!
                </div>
                <div
                    className="start-button"
                    onClick={() => {
                        setGameStart(!gameStart);
                        setTimer(0);
                        setRevealSplat(false);
                        setGameIsWon(false);
                    }}
                >
                    {gameStart ? "RESTART" : "START"}
                </div>
                <div className="info-holder">
                    <p>Timer: {timer.toFixed(1)}s</p>
                    <p>Target Window: {["Left", "Center", "Right"][windowNum]}</p>
                    <p>Your Position: {["Left", "Center", "Right"][handPosition]}</p>
                </div>
            </div>
        </div>
    );
}

export default ContactGame;
