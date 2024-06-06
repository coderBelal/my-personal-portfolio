// src/Profile.js

import { FaGithub, FaDribbble, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Main.css";
import profileImage from "../../assets/b1.jpg"; // Update with the correct path

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-text" data-aos="fade-right">
        <h4 data-aos="fade-down">Hi,I am Belal Uddin</h4>
        <h1>
          I Am a <span>Front-End Developer</span>
        </h1>
        <p data-aos="zoom-in">
          Creative web developer with 1 years of experience in designing and
          implementing user-friendly websites. Proficient in HTML, CSS,
          JavaScript, React,Tailwind,Bootstrap,Typescript and responsive design.
          Passionate about creating seamless user experiences and optimizing
          performance. Adept at collaborating with cross-functional teams to
          deliver innovative web solutions.s.
        </p>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/belal-uddin-99733229a">
            {" "}
            <button className="download-cv" data-aos="fade-right">
              Hire Me
            </button>
          </a>

              <a href="https://drive.google.com/file/d/1xt_K_EQowzhPe097mHutBru6RPDQEMNH/view?usp=drive_link">
            <button className="learn-more" data-aos="fade-left">
              View CV
            </button>
          </a>
        </div>
        <div className="social-icons" data-aos="zoom-in">
          <a href="https://github.com/coderBelal">
            <FaGithub />
          </a>

          <a href="https://x.com/coderbelal29">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/devbelal10/">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="profile-image" data-aos="fade-left">
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default Profile;
