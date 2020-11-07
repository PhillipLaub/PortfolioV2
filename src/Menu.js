import React from "react";
import "./Menu.css";

function Menu() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav__link");

    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
      });
    });
  });

  return (
    <div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <label>
            <li className="nav-item">
              <a href="#home" datatext="Home" className="nav__link">
                Home
              </a>
            </li>
          </label>

          <label>
            <li className="nav-item">
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>
          </label>

          <label>
            <li className="nav-item">
              <a href="#home" className="nav__link">
                About
              </a>
            </li>
          </label>

          <label>
            <li className="nav-item">
              <a href="#home" className="nav__link">
                Work
              </a>
            </li>
          </label>
        </ul>
      </nav>
    </div>
  );
}

<script></script>;

export default Menu;
