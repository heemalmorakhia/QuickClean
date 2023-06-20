import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../logo.png";

function NavigationBar({ setBackground = true }) {
  return (
    <div>
      <Navbar
        expand="lg"
        className={setBackground ? "navbarColor" : ""}
        style={{ paddingTop: "40px", paddingBottom: "80px" }}
      >
        <Container>
          <img className="logo" src={Logo} alt="company logo" />
          <span className="fw-bold display-6 text-white"> QuickClean</span>
          <Navbar.Toggle
            style={{ background: "#6873CE" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse className="custom-collapse" id="basic-navbar-nav">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center w-100">
              <Nav className="w-100 custom-nav">
                <Nav.Link style={{ color: "white" }} href="/">
                  Home
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/services">
                  Services
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/faqs">
                  FAQs
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/contact">
                  Contact Us
                </Nav.Link>
              </Nav>
              <div className="w-50 signIn">
                <a
                  className="text-decoration-none text-white border p-1 rounded"
                  href="/"
                >
                  Sign In
                </a>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
