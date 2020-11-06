import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
        {/* <h1 className="header__logo">laubster.tech</h1> */}
      </Link>

      <div className="header__nav">
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLineTwo">About</span>
          </div>
        </Link>

        <Link to="/projects">
          <div className="header__option">
            <span className="header__optionLineTwo">Projects</span>
          </div>
        </Link>
        <Link to="/contact">
          <div className="header__option">
            <span className="header__optionLineTwo">Contact</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
