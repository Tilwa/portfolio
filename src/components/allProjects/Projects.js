import React from "react";
import "./Projects.css";
import projec1Img from "../../images/project1.png";
import projec2Img from "../../images/project2.png";
import projec3Img from "../../images/project3.png";
import projec4Img from "../../images/project4.png";
const Projects = () => {
  return (
    <div className="projects-container">
      <h3 id="project-heading">Projects</h3>
      {/* project 1 starting section */}
      <div className="project-container-style1">
        {/* left side */}
        <div className="project-left-style1">
          <h4 className="project-title-style1">Project 1</h4>
          <h5 className="project-heading-style1">Dating Mobile App Design</h5>
          <p className="project-desc-style1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <p className="project-readme-style1">➡️ Read more...</p>
        </div>
        {/* right side */}
        <div className="project-right-sytle1">
          <div class="project-img-container-style1">
            <img
              class="project-image-style1"
              src={projec1Img}
              height="400px"
              alt="Example Image"
            />
            <div class="project-square-border-style1"></div>
          </div>
        </div>
      </div>

      {/* project 2 starting section */}
      <div className="project-container-style2">
        {/* left side */}

        <div className="project-left-sytle2">
          <div class="project-img-container-style2">
            <img
              class="project-image-style2"
              src={projec2Img}
              height="400px"
              alt="Example Image"
            />
            <div class="project-square-border-style2"></div>
          </div>
        </div>

        {/* right side */}
        <div className="project-right-style2">
          <h4 className="project-title-style2">Project 2</h4>
          <h5 className="project-heading-style2">
            E-Commerce Mobile App Design
          </h5>
          <p className="project-desc-style2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <p className="project-readme-style2">➡️ Read more...</p>
        </div>
      </div>

      {/* project 3 starting section */}
      <div className="project-container-style1">
        {/* left side */}
        <div className="project-left-style1">
          <h4 className="project-title-style1">Project 3</h4>
          <h5 className="project-heading-style1">Fitness Mobile App Design</h5>
          <p className="project-desc-style1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <p className="project-readme-style1">➡️ Read more...</p>
        </div>
        {/* right side */}
        <div className="project-right-sytle1">
          <div class="project-img-container-style1">
            <img
              class="project-image-style1"
              src={projec3Img}
              height="400px"
              alt="Example Image"
            />
            <div class="project-square-border-style1"></div>
          </div>
        </div>
      </div>

      {/* project 4 starting section */}
      <div className="project-container-style2">
        {/* left side */}

        <div className="project-left-sytle2">
          <div class="project-img-container-style2">
            <img
              class="project-image-style2"
              src={projec4Img}
              height="400px"
              alt="Example Image"
            />
            <div class="project-square-border-style2"></div>
          </div>
        </div>

        {/* right side */}
        <div className="project-right-style2">
          <h4 className="project-title-style2">Project 4</h4>
          <h5 className="project-heading-style2">
            Modelling Mobile App Design
          </h5>
          <p className="project-desc-style2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <p className="project-readme-style2">➡️ Read more...</p>
        </div>
      </div>

      <button className="view-all-btn">View All</button>
    </div>
  );
};

export default Projects;
