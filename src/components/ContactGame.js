import { useState, useEffect } from "react";
import "./ContactGame.css";
import HandPosition from "./HandPosition";
import ThrowItems from "./ThrowItems";

function ContactGame() {
    const defaultMessage = "Dear Mr. Dioguardi, we want to hire you. You are the absolute coolest.";
    const [gameStart, setGameStart] = useState(false);
    const [gameIsWon, setGameIsWon] = useState(false);
    const [revealSplat, setRevealSplat] = useState(false);
    const [windowNum, setWindowNum] = useState(null);
    const [timer, setTimer] = useState(0);
    const [handPosition, setHandPosition] = useState(0);
    const [selectedThrowItem, setSelectedThrowItem] = useState("tomato");
    const [message, setMessage] = useState(defaultMessage);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480); // Initial check

    // Detect window resize and update `isMobile`
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    // Auto-reset game when revealSplat is true
    useEffect(() => {
        if (revealSplat) {
            console.log("Message Sent:", message); // Message sent behind the scenes

            const resetTimeout = setTimeout(() => {
                setGameStart(false);
                setTimer(0);
                setRevealSplat(false);
                setGameIsWon(false);
                setWindowNum(null);
                setHandPosition(0);
                setMessage(defaultMessage); // Reset the message
            }, 2000); // Wait 2 seconds before resetting the game

            return () => clearTimeout(resetTimeout);
        }
    }, [revealSplat]);

    const handleClickFire = () => {
        if (windowNum === handPosition) {
            setGameIsWon(true);
            setRevealSplat(true);
        }
    };

    return (
        <div className="contact-game-wrapper">
            <div className="game-information-container">
                <div className="game-title">SPLAT ATTACK!</div>
                <div className="game-sub-title">MESSAGE DELIVERY SERVICE</div>
                <div className="instructions">
                    <p>1. Write your message</p>
                    <p>2. Choose your projectile</p>
                    <p>3. Press start</p>
                    <p>Objective: Use the Arrow Keys on your keyboard to move your hand. </p>
                    <p>Press Fire! when you're ready to throw. Get a splat and your message is sent!</p>
                </div>
            </div>
            <textarea
                className="input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
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
            {isMobile && (
                    <div className="mobile-throw-items">
                        <ThrowItems setSelectedThrowItem={setSelectedThrowItem} />
                    </div>
                )}
            {isMobile && (<div className="info-holder">
                    <p>Timer: {timer.toFixed(1)}s</p>
                    <p>Target Window: {["Left", "Center", "Right"][windowNum]}</p>
                    <p>Your Position: {["Left", "Center", "Right"][handPosition]}</p>
                </div>)}    
            <div className="action-holder">
                {!isMobile && <ThrowItems setSelectedThrowItem={setSelectedThrowItem} />}
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
                {!isMobile && (<div className="info-holder">
                    <p>Timer: {timer.toFixed(1)}s</p>
                    <p>Target Window: {["Left", "Center", "Right"][windowNum]}</p>
                    <p>Your Position: {["Left", "Center", "Right"][handPosition]}</p>
                </div>)}
                
            </div>
        </div>
    );
}

export default ContactGame;
