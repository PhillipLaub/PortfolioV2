import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__left">
          <div className="home__name">
            <h1>Phil Laub</h1>
          </div>
        </div>
        <div className="home__right">
          <div className="home__right__container">
            <h1>hi</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              efficitur elit, ut tincidunt lacus. In vel imperdiet dolor. Cras
              vulputate fringilla ligula in egestas. Suspendisse potenti. Aenean
              tempus consectetur urna id malesuada. Etiam at malesuada lacus.
              Aliquam faucibus tortor a est fringilla, scelerisque placerat
              sapien efficitur. Suspendisse dictum velit lectus. Sed euismod,
              ante vitae euismod iaculis, urna dolor tincidunt nisi, vel
              dignissim felis tortor quis lacus. Pellentesque eu lacus eros.
              Donec leo metus, blandit in tellus eget, pulvinar ultrices sem.
              Cras vehicula lorem aliquam, venenatis lorem eu, auctor ipsum.
              Quisque consectetur metus sed ante molestie, non pulvinar ex
              posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
