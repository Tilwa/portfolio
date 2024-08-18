import React from "react";
import "./About.css";
import aboutImg from "../../images/img.jpeg";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <div className="img-container">
          <img
            className="image"
            src={aboutImg}
            height="250px"
            alt="Example Image"
          />
          <div className="square-border"></div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-right-top">
          <h3 id="about-me-title">About Me</h3>
          <p id="about-me-para">
            Frontend React developer with a problem solving focus towards the
            development of application and also passionate about crafting sites
            with a focus on accessibility, stylish UI’s and no friction UX.
            Focused on utilizing the power of web fundamentals
          </p>
        </div>
        <div className="about-right-bottom">
          <button className="hire-me-contact" href="#">
            HIRE ME
          </button>
          <button className="resume-contact" href="#">
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
