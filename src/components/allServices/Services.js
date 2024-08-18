import React from "react";
import "./Services.css";
import project1 from "../../images/project1.png";
import One from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
const Services = () => {
  return (
    <div className="main-services-continer">
      <h3 id="services-heading">Services</h3>
      <div className="services">
        {/* LEFT */}
        <div className="left-services">
          <div className="right-top">
            <img className="right-image" src={One} />
            <h4 id="right-heading">VIDEO EDITING</h4>
          </div>
          <div className="right-bottom">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </div>
        </div>
        {/* right */}
        <div className="right-services">
          <div className="right-top">
            <img src={two} className="right-image" />
            <h4 id="right-heading">MOBILE APP DEVELOPMENT</h4>
          </div>
          <div className="right-bottom">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </div>
        </div>
      </div>
      <div className="services">
        {/* LEFT */}
        <div className="left-services">
          <div className="right-top">
            <img src={three} className="right-image" />
            <h4 id="right-heading">DESKTOP APP DEVELOPMENT</h4>
          </div>
          <div className="right-bottom">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </div>
        </div>
        {/* right */}
        <div className="right-services">
          <div className="right-top">
            <img src={four} className="right-image" />
            <h4 id="right-heading">PROGRAMMING LANGUAGES</h4>
          </div>
          <div className="right-bottom">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
