import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const gradientBackground = {
    background: "linear-gradient(to right, #ff6b6b, #ffb8b8)",
  };

  const brandStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
    marginRight: "15px",
  };

  const navLinkStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    color: "#fff",
    marginLeft: "10px",
    cursor: "pointer",
  };

  return (
    <Navbar style={gradientBackground} expand="lg">
      <Navbar.Brand href="#" style={brandStyles}>
        CRAVE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinkStyles}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinkStyles}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="menu"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinkStyles}
          >
            Menu
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinkStyles}
          >
            Contact Us
          </ScrollLink>
          <ScrollLink
            to="review"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinkStyles}
          >
            Review
          </ScrollLink>
          <ScrollLink
            to="login"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinkStyles}
          >
            Login
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
