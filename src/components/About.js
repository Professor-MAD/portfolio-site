import { useState, useEffect } from "react";
import "./About.css";

function About() {
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 480px)");

        setIsMobile(mediaQuery.matches);

        const handleResize = () => setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleResize);

        return () =>  mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return (
        <div className="about-parent">
            {isMobile ? (
                <div className="teaching-wrapper">
                    <>
                
                <img className="teaching" src="./images/teaching.jpg" alt="teaching" />
                <div className="nouns">
                    <ul className="noun-item">FATHER</ul>
                    <ul className="noun-item">HUSBAND</ul>
                    <ul className="noun-item">PROFESSOR</ul>
                    <ul className="noun-item">TEACHER</ul>
                    <ul className="noun-item">EAGLE SCOUT</ul>
                    <ul className="noun-item">COACH</ul>
                    <ul className="noun-item">MENTOR</ul>
                    <ul className="noun-item">WRITER</ul>
                    <ul className="noun-item">ARTIST</ul>
                    <ul className="noun-item">ATHLETE</ul>
                </div>
            </>
                </div>
                
            ) : (
                <>
                    <img className="teaching" src="./images/teaching.jpg" alt="teaching" />
                    <div className="nouns">
                        <ul className="noun-item">FATHER</ul>
                        <ul className="noun-item">HUSBAND</ul>
                        <ul className="noun-item">PROFESSOR</ul>
                        <ul className="noun-item">TEACHER</ul>
                        <ul className="noun-item">EAGLE SCOUT</ul>
                        <ul className="noun-item">COACH</ul>
                        <ul className="noun-item">MENTOR</ul>
                        <ul className="noun-item">WRITER</ul>
                        <ul className="noun-item">ARTIST</ul>
                        <ul className="noun-item">ATHLETE</ul>
                    </div>
                </>
            )}
            <div className="description-parent">
                <div className="recognition-container">
                    <img className="eagle-icon" src="./images/eagle.png" alt="eagle" />
                    <img className="rec-icon" src="./images/ecc.png" alt="ecc" />
                    <img className="rec-icon" src="./images/30.png" alt="30" />
                    <img className="rec-icon" src="./images/bb.png" alt="bb" />
                </div>
                <div className="description-container">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </div>
            </div>
        </div>
    );
}

export default About;