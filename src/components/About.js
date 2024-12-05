import "./About.css";

function About() {
    return (
        <div className="about-parent">
            <img className="teaching" src="./images/teaching.jpeg" alt="teaching"/>
            <div className="nouns">
                <li className="noun-item"></li>
                <li className="noun-item"></li>
                <li className="noun-item"></li>
                <li className="noun-item"></li>
                <li className="noun-item"></li>
                <li className="noun-item"></li>
                <li className="noun-item"></li>
                <li className="noun-item"></li>
                <li className="noun-item"></li>
                <li className="noun-item"></li>
            </div>
            <div className="description-parent">
                <div className="recognition-container">
                    <img className="eagle" src="./images/eagle.png" alt="eagle" />
                    <img className="ecc" src="./images/ecc.png" alt="ecc" />
                    <img className="bb" src="./images/bb.png" alt="bb" />
                </div>
                <div className="description-container">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </div>
            </div>
        </div>
    );
}

export default About;