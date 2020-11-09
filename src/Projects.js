import React from "react";
import "./Projects.css";
import ProjectCarousel from "./ProjectCarousel";

function Projects() {
  return (
    <div className="about">
      <div className="projects__right">
        <h1>right </h1>
      </div>
      <div class="diagonal-box">
        <div className="banner--fadeTop"></div>{" "}
        <div class="content">
          <h1>Projects</h1>
        </div>
        <div className="banner__bottom"></div>
        <div className="about__text2">
          <ProjectCarousel />
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    </div>
  );
}

export default Projects;
