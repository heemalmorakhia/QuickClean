import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
function NavigationBar() {
    return (
        <div>
            <Navbar expand="lg" className="navbarColor" style={{paddingTop:"40px", paddingBottom:"80px"}}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="" alt="company logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle style={{backgroundColor:"blue"}} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="custom-collapse" id="basic-navbar-nav">
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center w-100">
                            <Nav className="w-100 custom-nav">
                                <Nav.Link style={{color:"white"}} href="#home">Home</Nav.Link>
                                <Nav.Link style={{color:"white"}} href="#services">Services</Nav.Link>
                                <Nav.Link style={{color:"white"}} href="/faqs">FAQs</Nav.Link>
                                <Nav.Link style={{color:"white"}} href="#Contact Us">Contact Us</Nav.Link>
                            </Nav>
                            <div className="w-50 signIn">
                                <Button variant="primary" size="sm">Sign In</Button>
                            </div>
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;