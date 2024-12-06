import "./ContactGame.css";

function ThrowItems({ setSelectedThrowItem }) {
    return (
        <div className="throw-items-wrapper">
            <div className="selection-wrapper">
                {/* Tommy Tomato */}
                <div
                    className="individual-wrap"
                    onClick={() => setSelectedThrowItem("tomato")}
                >
                    <div className="selection-name">Tommy Tomato</div>
                    <img className="selection-pic" src="/images/tomato.png" alt="tomato" />
                </div>

                {/* Eggbert the Egg */}
                <div
                    className="individual-wrap"
                    onClick={() => setSelectedThrowItem("egg")}
                >
                    <div className="selection-name">Eggbert the Egg</div>
                    <img className="selection-pic" src="/images/egg.png" alt="egg" />
                </div>

                {/* Mr. Booger Brown */}
                <div
                    className="individual-wrap"
                    onClick={() => setSelectedThrowItem("booger")}
                >
                    <div className="selection-name">Mr. Booger Brown</div>
                    <img className="selection-pic" src="/images/booger.png" alt="booger" />
                </div>
            </div>
        </div>
    );
}

export default ThrowItems;

