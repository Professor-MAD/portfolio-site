import "./ContactGame.css";

function ThrowItems() {
    return (
        <div className="throw-items-wrapper">
            <div className="selection-wrapper">
                {/* Tommy Tomato */}
                <div className="individual-wrap">
                    <div className="selection-name">
                        <svg
                            width="300"
                            height="100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-arch"
                        >
                            <defs>
                                <path
                                    id="curvePathTomato"
                                    d="M 10 90 Q 150 -30 290 90"
                                />
                            </defs>
                            <text
                                fill="yellow"
                                fontSize="24"
                                fontFamily="Yikes"
                                stroke="black"
                                strokeWidth="0.5"
                            >
                                <textPath
                                    href="#curvePathTomato"
                                    startOffset="50%"
                                    textAnchor="middle"
                                >
                                    Tommy Tomato
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <img className="selection-pic" src="/images/tomato.png" alt="tomato" />
                </div>

                {/* Eggbert the Egg */}
                <div className="individual-wrap">
                    <div className="selection-name">
                        <svg
                            width="300"
                            height="100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-arch"
                        >
                            <defs>
                                <path
                                    id="curvePathEgg"
                                    d="M 10 90 Q 150 -40 290 90"
                                />
                            </defs>
                            <text
                                fill="yellow"
                                fontSize="24"
                                fontFamily="Yikes"
                                stroke="black"
                                strokeWidth="0.5"
                            >
                                <textPath
                                    href="#curvePathEgg"
                                    startOffset="50%"
                                    textAnchor="middle"
                                >
                                    Eggbert the Egg
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <img className="selection-pic" src="/images/egg.png" alt="egg" />
                </div>

                {/* Mr. Booger Brown */}
                <div className="individual-wrap">
                    <div className="selection-name">
                        <svg
                            width="300"
                            height="100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-arch"
                        >
                            <defs>
                                <path
                                    id="curvePathBooger"
                                    d="M 10 90 Q 150 -50 290 90"
                                />
                            </defs>
                            <text
                                fill="yellow"
                                fontSize="24"
                                fontFamily="Yikes"
                                stroke="black"
                                strokeWidth="0.5"
                            >
                                <textPath
                                    href="#curvePathBooger"
                                    startOffset="50%"
                                    textAnchor="middle"
                                >
                                    Mr. Booger Brown
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <img className="selection-pic" src="/images/booger.png" alt="booger" />
                </div>
            </div>
        </div>
    );
}

export default ThrowItems;
