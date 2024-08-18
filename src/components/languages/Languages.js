import React from "react";

import "./Languages.css";

const Languages = () => {
  return (
    <div className="languages-main-container">
      <h3 id="languages-heading">Languages</h3>
      {/* top languages */}
      <div className="languages-top-main">
        <div className="box1">
          <i className="devicon-amazonwebservices-plain-wordmark colored   box-icon"></i>
          <p className="box-title">AWS</p>
        </div>
        <div className="box2">
          <i class="devicon-css3-plain colored box-icon"></i>

          <p className="box-title">CSS3</p>
        </div>
        <div className="box3">
          <i class="devicon-react-original colored box-icon"></i>

          <p className="box-title">ReactJS</p>
        </div>
        <div className="box4">
          <i class="devicon-html5-plain colored box-icon"></i>

          <p className="box-title">HTML5</p>
        </div>
      </div>
      {/* bottom languages */}
      <div className="languages-top-main">
        <div className="box1">
          <i class="devicon-java-plain colored box-icon"></i>
          <p className="box-title">JAVA</p>
        </div>
        <div className="box2">
          <i class="devicon-javascript-plain colored box-icon"></i>

          <p className="box-title">JavaScript</p>
        </div>
        <div className="box3">
          <i class="devicon-nodejs-plain colored box-icon"></i>

          <p className="box-title">NodeJS</p>
        </div>
        <div className="box4">
          <i class="devicon-python-plain colored box-icon"></i>

          <p className="box-title">Python</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
