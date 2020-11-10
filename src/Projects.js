import React from "react";
import "./Projects.css";
import ProjectCarousel from "./ProjectCarousel";

const amazon = () => {
  window.location.href = "https://clone-4fb8f.web.app/";
  return null;
};

const covid = () => {
  window.location.href = "https://covid-19-tracker-27b30.web.app/";
  return null;
};

const netflix = () => {
  window.location.href = "https://netflixv2-35db5.web.app/";
  return null;
};

const starjump = () => {
  window.location.href = "https://powerful-tundra-87228.herokuapp.com/";
  return null;
};

const slack = () => {
  window.location.href = "https://slackv2-66a7b.web.app/";
  return null;
};

function Projects() {
  return (
    <div className="about">
      <div class="diagonal-box">
        <div className="banner--fadeTop"></div>{" "}
        <div class="content">
          <h1>Portfolio</h1>
        </div>
        <div className="banner__bottom"></div>
        <div className="about__text2">
          <ProjectCarousel />
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
      <div className="right">
        <h1>Projects</h1>
        <hr />
        <h5 onClick={amazon}>Amazon Clone</h5>
        <h5 onClick={covid}>Covid-19 Tracker</h5>
        <h5 onClick={netflix}>Netflix Clone</h5>
        <h5 onClick={starjump}>Star Jump</h5>
        <h5 onClick={slack}>Slack Clone</h5>
      </div>
    </div>
  );
}

export default Projects;
