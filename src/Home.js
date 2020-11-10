import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="about">
      <div class="diagonal-box">
        <div className="banner--fadeTop"></div>{" "}
        <div class="content">
          <h1>Phil Laub</h1>
        </div>
        <div className="banner__bottom">
          <h5>
            {" "}
            &lt; Web Developer | React Developer | Front-End Developer /&gt;
          </h5>
        </div>
        <div className="about__text">
          <p>
            Full Stack Developer with a background in electronics and business
            management, utilizing skills to build a responsive and friendly user
            experience. Graduate of the Coding Boot Camp at the University of
            California Riverside with skills in MySQL, MongoDB, Express, and
            proficiency with Javascript, Node, and React to create a highly
            responsive design. Enthusiastic about solving problems and issues
            that impact the user experience, with an emphasis on creating
            designs that are built and optimized for mobile. Goal for each
            project is to have a positive and memorable effect on the user,
            create a productive environment, and a practical design. Working on
            both the UI and UX, recently collaborated with a team of four on an
            app to cultivate young learning habits through bright and engaging
            easy-to-start, fun-to-play games. Constantly looking to use my
            technical skills and passion for mobile first design to make a
            footprint in this technologically driven world.
          </p>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    </div>
  );
}

export default Home;
