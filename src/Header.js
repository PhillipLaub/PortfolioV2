import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="/">
        <img src={logo} alt="" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
