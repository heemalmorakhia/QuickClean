import "../css/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Alert,
} from "react-bootstrap";
import phone from "../images/phone.svg";
import fax from "../images/fax.svg";
import emailImage from "../images/email.svg";
import PageLayout from "../components/layout";
import { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function Contact() {
  //Email regular expression
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  //Name regular  expression
  const nameRegex = /^[A-Za-z]/;

  //Phone regular expression
  const phoneRegex = /^[0-9]{6,}$/;

  //Comments regular expression
  const commnetsRegex = /^[A-Za-z0-9, .*@#%!^&$()_:;"<>?~`+-}{]{1,}$/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [comments, setComments] = useState("");

  //Get user input
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleComments = (e) => {
    setComments(e.target.value);
  };

  //Count the number of inforamtion in the correct format
  let count = 4;

  //Check whether display successfully alert
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Remind user the format of input information not correct
    if (!emailRegex.test(email)) {
      document.querySelector("#email-fill").style.borderColor = "#f5120a";
      count--;
    }

    //Remind user the format of input information not correct
    if (!nameRegex.test(name)) {
      document.querySelector("#name-fill").style.borderColor = "#f5120a";
      count--;
    }

    //Remind user the format of input information not correct
    if (!phoneRegex.test(phoneNum)) {
      document.querySelector("#phone-fill").style.borderColor = "#f5120a";
      count--;
    }

    //Remind user the format of input information not correct
    if (!commnetsRegex.test(comments)) {
      document.querySelector("#comments-fill").style.borderColor = "#f5120a";
      count--;
    }

    //If you all information in correct format, then show a success message
    if (count === 4) {
      setShow(true);
    }

    const data = {
      name: name,
      email: email,
      phone: phoneNum,
      comment: comments,
    };

    try {
      // Make the POST request to the server
      const response = await fetch("/contactApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setComments("");
      } else {
        console.error("Error sending the contact form:", response);
      }
    } catch (error) {
      console.error("Error sending the contact form:", error);
    }
  };

  //Show success message if user send a correct formatted message
  const handleAlert = () => {
    setShow(false);
    window.location.reload();
  };

  //Connect Google map API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return (
    <PageLayout>
      <div className="contact-page">
        {/* Show a message if user sent message succesfully */}
        {show && (
          <Alert variant="success" onClose={() => setShow(false)}>
            <Alert.Heading>Successfully Sent!</Alert.Heading>
            <p>
              Thanks for your contact! We will get back to you as soon as
              possible! If you have any other questions please contact us again!
              <br></br>
            </p>

            {/* Button to close alert */}
            <Button onClick={handleAlert} variant="outline-success">
              Close
            </Button>
          </Alert>
        )}

        <div className="form-data">
          <h1 style={{ fontSize: 48, fontWeight: "bold" }}>
            Get In{" "}
            <span style={{ color: "blue", fontSize: 48, fontWeight: "bold" }}>
              Touch
            </span>{" "}
          </h1>
          <p>
            Contact us for spotless cleaning services for your home or office.
            We provide tailored solutions and are ready to assist you!
          </p>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label={
                <span>
                  Name <span style={{ color: "red" }}>*</span>
                </span>
              }
              className="mb-3"
            >
              <Form.Control
                onChange={handleName}
                size="mid"
                type="text"
                placeholder="Name"
                id="name-fill"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label={
                <span>
                  Email address <span style={{ color: "red" }}>*</span>
                </span>
              }
              className="mb-3"
            >
              <Form.Control
                onChange={handleEmail}
                size="mid"
                type="email"
                placeholder="name@example.com"
                id="email-fill"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label={
                <span>
                  Phone <span style={{ color: "red" }}>*</span>
                </span>
              }
              className="mb-3"
            >
              <Form.Control
                onChange={handlePhone}
                size="mid"
                type="text"
                placeholder="Phone"
                id="phone-fill"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label={
                <span>
                  Comments <span style={{ color: "red" }}>*</span>
                </span>
              }
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                id="comments-fill"
                onChange={handleComments}
              />
            </FloatingLabel>
            <Form.Select className="mt-3">
              <option>How did you find us?</option>
              <option>Facebook</option>
              <option>Google Map</option>
              <option>Instagram</option>
              <option>Twitter</option>
            </Form.Select>
            <br />
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="primary"
              size="lg"
              className="submit-button"
            >
              SEND
            </Button>
          </Form>

          <Container className="contact-info">
            <Row>
              <Col md={4}>
                <Row>
                  <Col xs={2}>
                    <img src={phone} alt="phone-img" className="phoneImg"></img>
                  </Col>
                  <Col md={10}>
                    <p className="p1">PHONE</p>
                    <p className="p2">902-402-4444</p>
                  </Col>
                </Row>
              </Col>

              <Col md={4}>
                <Row>
                  <Col xs={2}>
                    <img src={fax} alt="phone-img" className="phoneImg"></img>
                  </Col>
                  <Col md={10}>
                    <p className="p1">FAX</p>
                    <p className="p2">902-444-4122</p>
                  </Col>
                </Row>
              </Col>

              <Col md={4}>
                <Row>
                  <Col xs={2}>
                    <img
                      src={emailImage}
                      alt="phone-img"
                      className="phoneImg"
                    ></img>
                  </Col>
                  <Col md={10}>
                    <p className="p1">EMAIL</p>
                    <p className="p2">demo@demo.ca</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Show the spcific location of the company. 
              If the map loaded, then show the location of the company on the map.
              Otherwise, show a "Loading...." message
          */}
        <div className="map">
          {isLoaded && (
            <GoogleMap
              mapContainerClassName="mapContainer"
              center={{ lat: 45.2, lng: 10 }}
              zoom={15}
            >
              <MarkerF position={{ lat: 45.2, lng: 10 }} />
            </GoogleMap>
          )}
          {!isLoaded && <h2>Loading.....</h2>}
        </div>
      </div>
    </PageLayout>
  );
}

export default Contact;
