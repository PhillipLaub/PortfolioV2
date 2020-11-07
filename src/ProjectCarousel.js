import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ProjectCarousel.css";
import Button from "react-bootstrap/Button";
import Home_desktop from "../src/images/Home_desktop.png";
import covid_dark_desktop from "../src/images/covid_dark_desktop.png";
function ProjectCarousel() {
  return (
    <div className="projectCarousel">
      <Carousel className="carouselComponent">
        <Carousel.Item>
          <img className="d-block w-100" src={Home_desktop} alt="First slide" />

          <Carousel.Caption>
            <h3>Project Title</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button className="carousel__button">Link to Project</Button>
            <Button className="carousel__button">Github</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={covid_dark_desktop}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Project Title</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button className="carousel__button">Link to Project</Button>
            <Button className="carousel__button">Github</Button>
          </Carousel.Caption>
        </Carousel.Item>{" "}
        {/* 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default ProjectCarousel;
