// import React, { useState } from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import sass from "../../assets/sass.png";
import tailwind from "../../assets/tailwind.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import boot from "../../assets/boot.jpg";
import redux from "../../assets/redux.png";
import next from "../../assets/download.png";
import typescript from "../../assets/type.jpg";
import vscode from "../../assets/vscode.png";
import vite from "../../assets/vite.png";
import netlify from "../../assets/netlify.png";
import npm from "../../assets/npm.png";
import git from "../../assets/git.png";
import github from "../../assets/github.jpg";
import "./Skill.css";

const Skill = () => {
  // const [showMore, setShowMore] = useState(false);
  // const toggleShowMore = () => {
  //   setShowMore(!showMore);
  // };

  return (
    <>
      <div className="skillContainer">
        <h1 className="skillHeading">
          Skills <span> Front End</span>
        </h1>
        <div className="skill">
          <div className="cardOne" data-aos="fade-down">
            <img src={html} alt="HTML5" />
            <div className="text">
              <h2>HTML5</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-down">
            <img src={css} alt="CSS3" />
            <div className="text">
              <h2>CSS3</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-down">
            <img src={boot} alt="Bootstrap" />
            <div className="text">
              <h2>BOOTSTRAP</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-up">
            <img src={tailwind} alt="Tailwind" />
            <div className="text">
              <h2>TAILWIND</h2>
            </div>
          </div>

          <div className="cardOne" data-aos="fade-up">
            <img src={sass} alt="Sass" />
            <div className="text">
              <h2>SASS</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-up">
            <img src={js} alt="JavaScript" />
            <div className="text">
              <h2>JAVASCRIPT</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-down">
            <img src={react} alt="React" />
            <div className="text">
              <h2>REACT</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-down">
            <img src={redux} alt="Redux" />
            <div className="text">
              <h2>REDUX</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-down">
            <img src={typescript} alt="TypeScript" />
            <div className="text">
              <h2>TYPESCRIPT</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-down">
            <img src={next} alt="Next JS" data-aos="fade-up" />
            <div className="text">
              <h2>NEXT JS</h2>
              <button className="next">Learning</button>
            </div>
          </div>
        </div>

        <h1 className="skillHeading">
          <span>Other</span> Skill
        </h1>
        <div className="skill">
          <div className="cardOne" data-aos="fade-up">
            <img src={netlify} alt="HTML5" />
            <div className="text">
              <h2>NETLIFY</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-up">
            <img src={git} alt="CSS3" />
            <div className="text">
              <h2>GIT</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-up">
            <img src={vscode} alt="Bootstrap" />
            <div className="text">
              <h2>VSCODE</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-down">
            <img src={npm} alt="Tailwind" />
            <div className="text">
              <h2>NPM</h2>
            </div>
          </div>

          <div className="cardOne" data-aos="fade-down">
            <img src={vite} alt="Sass" />
            <div className="text">
              <h2>VITE</h2>
            </div>
          </div>
          <div className="cardOne" data-aos="fade-down">
            <img src={github} alt="Sass" />
            <div className="text">
              <h2>GITHUB</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
