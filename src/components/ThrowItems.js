import "./ContactGame.css";

function ThrowItems() {
    return(
        <div className="throw-items-wrapper">
            <div className="selection-wrapper">
                
                <div className="individual-wrap">
                    <div className="selection-name">Tommy Tomato</div>
                    <img className="selection-pic" src="/images/tomato.png" alt="tomato" />
                </div>
                
                <div className="individual-wrap">
                    <div className="selection-name">Eggbert the Egg</div>
                    <img className="selection-pic" src="/images/egg.png" alt="egg" />
                </div>
                
                <div className="individual-wrap">
                    <div className="selection-name">Mr. Booger Brown</div>
                    <img className="selection-pic" src="/images/booger.png" alt="booger" />
                </div>

            </div>
        </div>
    );
}

export default ThrowItems;