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
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

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

    useEffect(() => {
        if (revealSplat) {
            console.log("Message Sent:", { name, email, message }); // Message sent behind the scenes

            const resetTimeout = setTimeout(() => {
                setGameStart(false);
                setTimer(0);
                setRevealSplat(false);
                setGameIsWon(false);
                setWindowNum(null);
                setHandPosition(0);
                setMessage(defaultMessage); // Reset the message
                setName(""); // Reset name
                setEmail(""); // Reset email
            }, 2000);

            return () => clearTimeout(resetTimeout);
        }
    }, [revealSplat]);

    const handleClickFire = () => {
        if (windowNum === handPosition) {
            setGameIsWon(true);
            setRevealSplat(true);

            // Submit data to backend
            fetch("https://portfolio-site-eta-ashy.vercel.app/api/submit-message", { // Backend URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            })
                .then((res) => res.json())
                .then((data) => console.log("Response:", data))
                .catch((err) => console.error("Error:", err));
            
        }
    };

    return (
        <div className="contact-game-wrapper">
            <div className="game-information-container">
                <div className="game-title">SPLAT ATTACK!</div>
                <div className="game-sub-title">MESSAGE DELIVERY SERVICE</div>
                <div className="instructions">
                    <p>1. Enter your name and email</p>
                    <p>2. Write your message</p>
                    <p>3. Choose your projectile</p>
                    <p>4. Press start and fire!</p>
                    <p>Objective: Get a splat to send your message!</p>
                </div>
            </div>
            <div className="input-holder">
            <input
                type="text"
                className="input input-name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                className="input input-email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                className="input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            </div>
            
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
                isMobile={isMobile}
            />
            {isMobile && (
                <div className="mobile-throw-items">
                    <ThrowItems setSelectedThrowItem={setSelectedThrowItem} />
                </div>
            )}
            {isMobile && (
                <div className="info-holder">
                    <p>Timer: {timer.toFixed(1)}s</p>
                    <p>Target Window: {["Left", "Center", "Right"][windowNum]}</p>
                    <p>Your Position: {["Left", "Center", "Right"][handPosition]}</p>
                </div>
            )}
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
                {!isMobile && (
                    <div className="info-holder">
                        <p>Timer: {timer.toFixed(1)}s</p>
                        <p>Target Window: {["Left", "Center", "Right"][windowNum]}</p>
                        <p>Your Position: {["Left", "Center", "Right"][handPosition]}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContactGame;
