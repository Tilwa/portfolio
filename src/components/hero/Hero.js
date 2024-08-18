import React from "react";
import "./Hero.css";
import Navbar from "../navbar/Navbar";
const Hero = () => {
  return (
    <div className="hero">
      <h6 id="small-title">I'm a</h6>
      <div id="main-title-div">
        <h2 className="main-title">
          FRONT-END <br />
          SOFTWARE <br />
          DEVELOPER
        </h2>
        <p id="dot">.</p>
      </div>
      <button id="projects-btn">Previous Projects</button>
    </div>
  );
};

export default Hero;
