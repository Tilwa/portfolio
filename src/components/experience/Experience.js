import React from "react";
import "./Experience.css";
import hansIcon from "../../images/hans-logo.jpg";
import faheemsIcon from "../../images/faheems-technology.png";
const Experience = () => {
  return (
    <div className="experience">
      <h3 id="experience-heading">Experience</h3>
      <div className="experience-main">
        {/* left div */}
        <div className="left-experience">
          <div className="left-experience-text">
            <h4 id="experience-title">Web Developer</h4>
            <h5 id="company-name">HANS LOGISTICS LLC (Full-time)</h5>
            <h6 id="company-time">(Apr 2022 - Apr 2024)</h6>
            <ul className="job-details">
              <li>
                I am currently providing my services as a frontend developer for
                the Fasbazar website.
              </li>
              <li>
                I am also responsible for UI updates, small maintenance tasks,
                and resolving website bugs.
              </li>
              <li>
                Responsible for ecommerce management, portal handling, product
                listing, data scraping.
              </li>
              <li>
                Testing fasbazar mobile app and website modules and updates.
              </li>
            </ul>
          </div>
          <div className="left-experience-icon">
            <img id="hans-logo" src={hansIcon} />
          </div>
        </div>
        {/* right div */}
        <div className="right-experience">
          <div className="left-experience">
            <div className="left-experience-text">
              <h4 id="experience-title">Frontend Developer</h4>
              <h5 id="company-name">Faheem's Technology (Internship)</h5>
              <h6 id="company-time">(Aug 2021 - Feb 2022)</h6>
              <ul className="job-details">
                <li>Worked on React JS as a Front–end developer.</li>
                <li>
                  Developed landing page responsive designs along with sign in
                  and sign up forms etc.
                </li>
                <li>Worked with restful APIs, Hooks, and redux.</li>
                <li>Designed stylish UI’s and no friction UX.</li>
              </ul>
            </div>
            <div className="left-experience-icon">
              <img id="faheems-logo" src={faheemsIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
