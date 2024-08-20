import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-main-container">
      <h3 id="skills-heading">Skills</h3>

      {/*new style starts from here */}
      <div className="skills">
        <div className="div1">
          <h4 className="title-left">FRONTEND</h4>
          {/* first row starts */}
          <div className="icons-right">
            <div className="icons">
              <i class="devicon-html5-plain colored box-icon"></i>
              <p className="box-title">HTML5</p>
            </div>
            <div className="icons">
              <i class="devicon-css3-plain colored box-icon"></i>
              <p className="box-title">CSS3</p>
            </div>
            <div className="icons">
              <i class="devicon-javascript-plain colored box-icon"></i>
              <p className="box-title">JavaScript</p>
            </div>
            <div className="icons">
              <i class="devicon-react-original colored box-icon"></i>
              <p className="box-title">ReactJS</p>
            </div>
            <div className="icons">
              <i class="devicon-bootstrap-plain-wordmark colored box-icon"></i>
              <p className="box-title">Bootstrap</p>
            </div>
          </div>
        </div>
        {/* second row starts */}
        <hr id="bottom-line" />
        <div className="div2">
          <h4 className="title-left">BACKEND</h4>
          <div className="icons-right">
            <div className="icons">
              <i class="devicon-nodejs-plain colored box-icon"></i>
              <p className="box-title">NodeJS</p>
            </div>
            <div className="icons">
              <i class="devicon-php-plain colored box-icon"></i>
              <p className="box-title">PHP</p>
            </div>
            <div className="icons">
              <i class="devicon-cplusplus-plain colored box-icon"></i>
              <p className="box-title">C++</p>
            </div>
          </div>
        </div>
        {/* third row starts */}
        <hr id="bottom-line" />
        <div className="div3">
          <h4 className="title-left">DATABASE</h4>
          <div className="icons-right">
            <div className="icons">
              <i class="devicon-mongodb-plain-wordmark colored box-icon"></i>
              <p className="box-title">MongoDB</p>
            </div>
            <div className="icons">
              <i class="devicon-mysql-plain-wordmark colored  box-icon"></i>
              <p className="box-title">Mysql</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
