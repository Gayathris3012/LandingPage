import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

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
    fontSize: "18px",
    color: "#fff",
    marginLeft: "15px",
  };

  return (
    <Navbar style={gradientBackground} expand="lg">
      <Navbar.Brand href="#" style={brandStyles}>
        <Image />
        CRAVE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="Home.js" style={navLinkStyles}>
            Home
          </Nav.Link>
          <Nav.Link href="AboutUs.js" style={navLinkStyles}>
            About
          </Nav.Link>
          <Nav.Link href="Menu.js" style={navLinkStyles}>
            Menu
          </Nav.Link>
          <Nav.Link href="Contact.js" style={navLinkStyles}>
            Contact Us
          </Nav.Link>
          <Nav.Link href="Review.js" style={navLinkStyles}>
            Review
          </Nav.Link>
          <Nav.Link href="Login.js" style={navLinkStyles}>
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
