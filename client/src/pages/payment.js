import {
  Container,
  Form,
  FloatingLabel,
  Button,
  Row,
  Col,
  Placeholder,
  Alert,
} from "react-bootstrap";
import PageLayout from "../components/layout";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { QUERY_USER } from "../utilities/queries";
import { useQuery, useMutation } from "@apollo/client";

function Payment(props) {
  const { state } = useLocation();

  const navigate = useNavigate();
  //Master Card Regex
  const masterCardRegex = /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/;

  //Visa Card Regex
  const visaCardRegex = /^4[0-9]{2,}$/;

  //cardhold Name regex
  const cardholdNameRegex = /^[A-Za-z }{]{4,}$/;

  // MM/YY format
  const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

  // CVC Regex
  const cvcRegex = /^\d{3}$/;
  const cvcRegex2 = /^\d{4}$/;

  //add client information to the booking database
  const { data } = useQuery(QUERY_USER);
  const user = data?.user || {};
  let client = user.email;
  let taskChecker = 0;

  //Get all the data from scheduling page
  const {
    FirstName,
    LastName,
    Email,
    Phone,
    Package,
    Price,
    Date,
    Time,
    Address,
    PostCode,
    City,
  } = state;

  //Save all information from input boxes
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvc, setCVC] = useState("");
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const review = {
    rating: -1,
    comments: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //All data that needs to be saved into database
    const data = {
      FirstName,
      LastName,
      Email,
      Phone,
      Package,
      Price,
      Date,
      Time,
      Address,
      PostCode,
      City,
      cardNumber,
      cardHolderName,
      client,
      review,
    };

    //Information Checking
    if (masterCardRegex.test(cardNumber) || visaCardRegex.test(cardNumber)) {
      taskChecker++;
    } else {
      document.querySelector("#cardNumber-fill").style.borderColor = "#f5120a";
    }

    if (cardholdNameRegex.test(cardHolderName)) {
      taskChecker++;
    } else {
      document.querySelector("#cardHolderName-fill").style.borderColor =
        "#f5120a";
    }

    if (dateRegex.test(expiration)) {
      taskChecker++;
    } else {
      document.querySelector("#expiration-fill").style.borderColor = "#f5120a";
    }

    if (cvcRegex.test(cvc) || cvcRegex2.test(cvc)) {
      taskChecker++;
    } else {
      document.querySelector("#cvc-fill").style.borderColor = "#f5120a";
    }

    //If data not in the correct format, then show alert
    if (taskChecker < 4) {
      setShowAlert(true);
    } else {
      //send data to database
      axios.post("/payment", data).then((res) => {
        console.log(res);

        if (res.data && res.data.success) {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 2000);

          //Back to the homepage
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      });
    }
  };

  return (
    <PageLayout>
      {/* Alert */}
      <Alert
        show={showAlert}
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
          <Button onClick={() => setShowAlert(false)} variant="outline-success">
            CLOSE
          </Button>
        </div>
      </Alert>
      <div>
        <h1 style={{ textAlign: "center", paddingTop: "10px" }}>PAYMENT</h1>
        <div className="d-flex justify-content-center">
          <hr
            style={{
              borderTop: "5px solid #999",
              width: "70%",
              textAlign: "center",
            }}
          />
        </div>
        <Container
          style={{ padding: "50px", paddingTop: "40px", paddingBottom: "30px" }}
        >
          <Row>
            <Col md={6}>
              <div className="p-3" style={{ backgroundColor: "#eee" }}>
                <span className="fw-bold">Service Summary</span>
                <div className="d-flex justify-content-between mt-2">
                  <span>Name: </span>
                  <span>
                    {FirstName} {LastName}
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Email: </span> <span>{Email}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Phone: </span>
                  <span>{Phone}</span>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <span>Address</span> <span>{Address}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Post Code</span> <span>{PostCode}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>City</span> <span>{City}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mt-2">
                  <span className="lh-sm">Service Date:</span>
                  <span>
                    {Date}, {Time}
                  </span>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <span className="lh-sm">Service Packages:</span>
                  <span>{Package}</span>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <span className="lh-sm">Price:</span>
                  <span class="text-success">${Price}</span>
                </div>
              </div>
            </Col>

            {/* Payment */}
            <Col md={6}>
              <div className="container mt-4">
                <div className="row justify-content-center">
                  <div
                    className="col-md-9"
                    style={{
                      border: "2px solid grey",
                      borderRadius: "10px",
                      marginBottom: "20px",
                      display: "inline-block",
                    }}
                  >
                    <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
                      <div className="form-group">
                        <label htmlFor="cardNumber">
                          Card Number{" "}
                          <span
                            style={{
                              fontSize: "10px",
                              color: "grey",
                              display: "inline",
                            }}
                          >
                            {" "}
                            [Visa OR Debit OR Master]
                          </span>{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cardNumber-fill"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardHolderName">Cardholder Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cardHolderName-fill"
                          value={cardHolderName}
                          onChange={(e) => setCardHolderName(e.target.value)}
                        />
                      </div>

                      <div className="form-row">
                        <Row>
                          <Col className="form-group col-md-6">
                            <label htmlFor="expirationMonth">Expiration</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/YY"
                              id="expiration-fill"
                              value={expiration}
                              onChange={(e) => setExpiration(e.target.value)}
                            />
                            <p
                              style={{
                                fontSize: "10px",
                                color: "grey",
                                display: "inline",
                              }}
                            >
                              * What is the expiry date
                            </p>
                            <p style={{ fontSize: "10px", color: "grey" }}>
                              * It is formatted as MM/YY
                            </p>
                          </Col>

                          <Col className="form-group col-md-6">
                            <label htmlFor="cvv">CVC</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cvc-fill"
                              placeholder="CVC"
                              value={cvc}
                              onChange={(e) => setCVC(e.target.value)}
                            />
                            <p
                              style={{
                                fontSize: "10px",
                                color: "grey",
                                display: "inline",
                              }}
                            >
                              * Card Verification Number
                            </p>
                            <p style={{ fontSize: "10px", color: "grey" }}>
                              * It is three- or four-digit number
                            </p>
                          </Col>
                        </Row>
                      </div>

                      <div
                        className="d-flex justify-content-center"
                        style={{ paddingTop: "15px" }}
                      >
                        <button type="submit" className="btn btn-primary">
                          Pay Now!
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {show && (
        <Alert
          variant="success"
          style={{
            color: "white",
            textAlign: "center",
            width: "40%",
            borderRadius: "8px",
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)", // This will center the div both horizontally and vertically
            padding: "15px 0",
            backgroundColor: "lightgreen",
            fontSize: "200%",
          }}
        >
          <Alert.Heading>Successful!</Alert.Heading>
          <p>Thanks for booking our cleaning service!</p>
        </Alert>
      )}
    </PageLayout>
  );
}

export default Payment;
