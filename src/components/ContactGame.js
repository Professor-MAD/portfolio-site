import { useState, useEffect } from "react";
import "./ContactGame.css";
import HandPosition from "./HandPosition";

function ContactGame() {
    const [gameStart, setGameStart] = useState(false);
    const [gameIsWon, setGameIsWon] = useState(false);
    const [revealSplat, setRevealSplat] = useState(false);
    const [windowNum, setWindowNum] = useState(null);
    const [timer, setTimer] = useState(0);
    const [handPosition, setHandPosition] = useState(0);

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
            <HandPosition
                 handPosition={handPosition}
                setHandPosition={setHandPosition}
                windowNum={windowNum}
            />
            <img className="fire-button" src="/images/fire.png" alt="fire" onClick={handleClickFire}/>
            {revealSplat && <div className="splat-image">Splat!</div>}
            <img onClick={() => {
                    setGameStart(!gameStart);
                    setTimer(0);
                    setRevealSplat(false);
                    setGameIsWon(false);
                }} className="start-button" src="/images/start.png" alt="start" />

            <p>Timer: {timer.toFixed(1)}s</p>
            <p>Target Window: {["Left", "Center", "Right"][windowNum]}</p>
            <p>Your Position: {["Left", "Center", "Right"][handPosition]}</p>
        </div>
    );
}

export default ContactGame;
