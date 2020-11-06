import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      {/* Carousel start */}

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        fade={true}
        touch={true}
        className="home__image"
      >
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/b4/bf/af/b4bfafa2dccc4cf3fe24f774b3f13b12.jpg"
            alt="First slide"
          /> */}
          <div className="home__slide">
            <div className="slide__container"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-ZDIxMDFkOTAt-w1500._CB418095224_.jpg"
            alt="Third slide"
          /> */}
          <div className="home__slide">
            <div className="slide__container"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/dash/trafficdrivers/Q4_2020_HolidayDash_TrafficDrivers_Desktop_Hero_V2_Photo_1500x600._CB402709157_.jpg"
            alt="Third slide"
          /> */}
          <div className="home__slide">
            <div className="slide__container">
              <h3>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum{" "}
              </h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* Carousel End */}
    </div>
  );
}

export default HomeCarousel;
