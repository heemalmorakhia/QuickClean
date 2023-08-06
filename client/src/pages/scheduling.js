import {
  Container,
  Form,
  FloatingLabel,
  Button,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import PageLayout from "../components/layout";
import "../css/scheduling.css";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Auth from "../utilities/auth";

function Scheduling(props) {
  const navigate = useNavigate();

  const { state } = useLocation();

  const [show, setShow] = useState(false);

  //Service Information
  const profile = Auth.getProfile();
  const [firstName, setFName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(profile.data.email);
  const [phone, setPhone] = useState("");
  const [dateBooking, setDateBooking] = useState("");
  const [timeBooking, setTimeBooking] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [selectedCity, setSelectedCity] = useState("Halifax, Nova Scotia");

  const [isChecked, setIsChecked] = useState(false);

  let count = 0;

  //Email regular expression
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  //Name regular  expression
  const nameRegex = /^[A-Za-z ]/;

  //Phone regular expression
  const phoneRegex = /^[0-9]{6,}$/;

  const commnetsRegex = /^[A-Za-z0-9, .*@#%!^&$()_:;"<>?~`+-}{]{1,}$/;

  //Remind user the format of input information not correct
  if (emailRegex.test(email)) {
    //document.querySelector("#email-fill").style.borderColor = "#f5120a";
    count++;
  }

  //Remind user the format of input information not correct
  if (nameRegex.test(firstName)) {
    //document.querySelector("#name-fill").style.borderColor = "#f5120a";
    count++;
  }

  //Remind user the format of input information not correct
  if (nameRegex.test(lastName)) {
    //document.querySelector("#name-fill").style.borderColor = "#f5120a";
    count++;
  }

  //Remind user the format of input information not correct
  if (phoneRegex.test(phone)) {
    //document.querySelector("#phone-fill").style.borderColor = "#f5120a";
    count++;
  }

  if (commnetsRegex.test(dateBooking)) {
    //document.querySelector("#comments-fill").style.borderColor = "#f5120a";
    count++;
  }

  if (commnetsRegex.test(timeBooking)) {
    //document.querySelector("#comments-fill").style.borderColor = "#f5120a";
    count++;
  }

  if (commnetsRegex.test(address)) {
    //document.querySelector("#comments-fill").style.borderColor = "#f5120a";
    count++;
  }

  if (commnetsRegex.test(postalCode)) {
    //document.querySelector("#comments-fill").style.borderColor = "#f5120a";
    count++;
  }

  //Get data from payment
  const { service, price } = state;

  //Get data from input boxes
  const handleFName = (e) => {
    setFName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleDateBooking = (e) => {
    setDateBooking(e.target.value);
  };

  const handleTimeBooking = (e) => {
    setTimeBooking(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePostalCode = (e) => {
    setPostalCode(e.target.value);
  };

  const handleSelectedCity = (e) => {
    setSelectedCity(e.target.value);
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  if (isChecked === true) {
    count++;
  }

  //When the user clicks "Book" button, then submit the from the payment page
  const handleSubmit = (e) => {
    e.preventDefault();
    //If you user entered all the information in the correct format, then go to payment page
    if (count > 8) {
      navigate("/booking/scheduling/payment", {
        state: {
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Phone: phone,
          Date: dateBooking,
          Time: timeBooking,
          Package: service,
          Price: price,
          Address: address,
          PostCode: postalCode,
          City: selectedCity,
        },
      });

      //Link to the payment page
      <Link
        className="text-decoration-none"
        style={{ color: "black" }}
        to="/booking/scheduling/payment"
      />;
    } else {
      //Alert
      setShow(true);
      window.scrollTo(0, 0);
    }
  };

  return (
    <PageLayout>
      {/* Alert */}
      <Alert
        show={show}
        variant="danger"
        style={{
          width: "50%",
          fontSize: "14px",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "relative",
        }}
      >
        <Alert.Heading>Check Information</Alert.Heading>
        <p>Please check that the information you filled in is correct!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            CLOSE
          </Button>
        </div>
      </Alert>

      <Container className="schedule-container" style={{ padding: "50px" }}>
        <h1>Scheduling the Services</h1>
        <Form>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="floatingInput1"
                label="First Name *"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={handleFName}
                />
              </FloatingLabel>
            </Col>

            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="floatingInput2"
                label="Last Name *"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={handleLastName}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="floatingInput3"
                label="Email address *"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  defaultValue={profile.data.email}
                  onChange={handleEmail}
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="floatingInput4"
                label="Phone *"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="XXXXXXXX"
                  onChange={handlePhone}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br />

          <FloatingLabel
            controlId="floatingInput5"
            label="Selected Package *"
            className="mb-3"
          >
            <Form.Control
              type="text"
              readOnly
              value={service + ", $" + price}
            ></Form.Control>
          </FloatingLabel>

          <Row>
            <Col xs={12} md={6}>
              <label htmlFor="dateBooking">Date</label>
              <br />
              <input
                type="date"
                className="form-control"
                id="dateBooking"
                name="dateBooking"
                onChange={handleDateBooking}
              />
            </Col>

            <Col xs={12} md={6}>
              <label htmlFor="timeBooking">Time</label>
              <br />
              <input
                type="time"
                className="form-control"
                id="timeBooking"
                name="timeBooking"
                onChange={handleTimeBooking}
              />
            </Col>
          </Row>
          <br />

          <FloatingLabel
            controlId="floatingInput6"
            label="Address *"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={handleAddress}
            />
          </FloatingLabel>

          <br />

          <Row>
            <Col xs={12} md={6}>
              <div className="select-container">
                <Form.Select size="lg" onChange={handleSelectedCity}>
                  <option value="Halifax, Nova Scotia">
                    Halifax, Nova Scotia
                  </option>
                  <option value="Toronto, Ontario">Toronto, Ontario</option>
                  <option value="Vancouver, British Columbia">
                    Vancouver, British Columbia
                  </option>
                  <option value="Calgary, Alberta">Calgary, Alberta</option>
                </Form.Select>
              </div>
            </Col>

            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="floatingInput9"
                label="Postal Code *"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="XXXXXXXX"
                  onChange={handlePostalCode}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`I Agree to Terms and Conditions`}
                  onChange={handleCheckboxChange}
                />
              </div>
            ))}
          </Form>
          <br />

          <div className="d-flex justify-content-center">
            <Button
              style={{ width: "50%" }}
              onClick={handleSubmit}
              type="submit"
              variant="success"
              className="submit-button"
            >
              Continue
            </Button>
          </div>
        </Form>
      </Container>
    </PageLayout>
  );
}

export default Scheduling;
