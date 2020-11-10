import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ProjectCarousel.css";
import Button from "react-bootstrap/Button";
import Home_desktop from "../src/images/Home_desktop.png";
import covid_dark_desktop from "../src/images/covid_dark_desktop.png";
import netflix_home from "../src/images/netflix_home.png";
import starjump from "../src/images/starjump.png";
import chat from "../src/images/chat.png";

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

const starJump = () => {
  window.location.href = "https://powerful-tundra-87228.herokuapp.com/";
  return null;
};

const slack = () => {
  window.location.href = "https://slackv2-66a7b.web.app/";
  return null;
};

const amazonGH = () => {
  window.location.href = "https://github.com/PhillipLaub/Amazon-clone";
  return null;
};

const covidGH = () => {
  window.location.href = "https://github.com/PhillipLaub/COVID19TRACKER";
  return null;
};

const netflixGH = () => {
  window.location.href = "https://github.com/PhillipLaub/NetflixClone";
  return null;
};

const starJumpGH = () => {
  window.location.href = "https://github.com/PhillipLaub/Star-Jump";
  return null;
};

const slackGH = () => {
  window.location.href = "https://github.com/PhillipLaub/Slack-v2";
  return null;
};

function ProjectCarousel() {
  return (
    <div className="projectCarousel">
      <Carousel className="carouselComponent">
        <Carousel.Item>
          <img className="d-block w-100" src={Home_desktop} alt="First slide" />
          <Carousel.Caption className="carousel__text">
            <h3>E-Commerce - Amazon Clone</h3>
            <Button className="carousel__button" onClick={amazon}>
              Link to Project
            </Button>
            <Button className="carousel__button" onClick={amazonGH}>
              Github
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={covid_dark_desktop}
            alt="First slide"
          />
          <Carousel.Caption className="carousel__text">
            <h3>Covid-19 Tracker</h3>
            <Button className="carousel__button" onClick={covid}>
              Link to Project
            </Button>
            <Button className="carousel__button" onClick={covidGH}>
              Github
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={netflix_home} alt="First slide" />
          <Carousel.Caption className="carousel__text">
            <h3>Netflix Clone</h3>
            <Button className="carousel__button" onClick={netflix}>
              Link to Project
            </Button>
            <Button className="carousel__button" onClick={netflixGH}>
              Github
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={starjump} alt="First slide" />
          <Carousel.Caption className="carousel__text">
            <h3>Star Jump</h3>
            <Button className="carousel__button" onClick={starJump}>
              Link to Project
            </Button>
            <Button className="carousel__button" onClick={starJumpGH}>
              Github
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={chat} alt="First slide" />
          <Carousel.Caption className="carousel__text">
            <h3>Slack Clone</h3>
            <Button className="carousel__button" onClick={slack}>
              Link to Project
            </Button>
            <Button className="carousel__button" onClick={slackGH}>
              Github
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProjectCarousel;
