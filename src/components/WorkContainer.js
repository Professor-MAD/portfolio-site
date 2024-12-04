import "./WorkContainer.css";

function WorkContainer() {
    return (
        <div className="work-container" >
            <div className="container-left">
                <img className="mana-mind" src="/images/mana-mind.png" alt="mana-mind" />
            </div>
            <div className="container-right">
                <div className="container-right-top">
                    ManaMind: The MTG Stockfish
                </div>
                <div className="container-right-bottom">
                    <img className="mana-mind-screenshot" src="/images/mana-mind-shot.png" alt="mana-mind-screenshot" />
                    <div className="work-content">
                        <div className="icon-row">
                            <img className="icon" src="/images/c.png" alt="c-icon" />
                            <img className="icon" src="/images/clang.png" alt="clang" />
                        </div>
                        <div className="text">This is a custom-built MTG engine with a unique class-less, functional approach to card creation, featuring a gameloop that is operated in the terminal. The card_creation engine and the game_loop engine work together to create a one-of-a-kind card playing experience, focused on game functions and data. A work in progress, the goal will be to someday emulate games at high speeds using all of Magic’s cards, making it the “Stockfish” of Magic the Gathering. It is an open-source project.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkContainer;