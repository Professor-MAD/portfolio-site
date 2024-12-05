import { useState, useEffect } from "react";
import "./ContactGame.css";
import HandPosition from "./HandPosition";

function ContactGame() {
    const [gameStart, setGameStart] = useState(false);
    const [gameIsWon, setGameIsWon] = useState(false);
    const [revealSplat, setRevealSplat] = useState(false);
    const [windowNum, setWindowNum] = useState(null); // Random position
    const [timer, setTimer] = useState(0); // Timer
    const [handPosition, setHandPosition] = useState(0); // Player-controlled position

    // Generate random window every 0.5s when the game is running
    useEffect(() => {
        if (gameStart) {
            const intervalId = setInterval(() => {
                const randomNum = Math.floor(Math.random() * 3); // Random 0, 1, or 2
                setWindowNum(randomNum);
                setTimer((prev) => prev + 0.5);
            }, 500);

            return () => clearInterval(intervalId);
        }
    }, [gameStart]);

    // Handle "fire" button logic
    const handleClickFire = () => {
        if (windowNum === handPosition) {
            setGameIsWon(true);
            setRevealSplat(true);
        }
    };

    return (
        <div className="contact-game-wrapper">
            <HandPosition
                handPosition={handPosition}
                setHandPosition={setHandPosition}
            />
            <button className="fire-button" onClick={handleClickFire}>
                Fire
            </button>
            {revealSplat && <div className="splat-image">Splat!</div>}
            <button
                onClick={() => {
                    setGameStart(!gameStart);
                    setTimer(0);
                    setRevealSplat(false);
                    setGameIsWon(false);
                }}
                className="start-button"
            >
                {gameStart ? "Restart Game" : "Start Game"}
            </button>
            <p>Timer: {timer.toFixed(1)}s</p>
            <p>Target Window: {["Left", "Center", "Right"][windowNum]}</p>
            <p>Your Position: {["Left", "Center", "Right"][handPosition]}</p>
        </div>
    );
}

export default ContactGame;
