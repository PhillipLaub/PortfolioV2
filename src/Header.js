import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const linkedIn = () => {
  window.location.href = "https://www.linkedin.com/in/phillip-laub/";
  return null;
};

const gitHub = () => {
  window.location.href = "https://github.com/PhillipLaub/";

  return null;
};

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="/">
        <img src={logo} alt="" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <HomeIcon />
            Home
          </Nav.Link>
          <Nav.Link href="/projects">
            <WorkIcon />
            Portfolio
          </Nav.Link>
          <Nav.Link href="/contact">
            <PermContactCalendarIcon />
            Contact
          </Nav.Link>
          <div className="mobile__icon">
            <Nav.Link onClick={linkedIn}>
              <LinkedInIcon />
              LinkedIn
            </Nav.Link>
            <Nav.Link onClick={gitHub}>
              <GitHubIcon />
              GitHub
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
