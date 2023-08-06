import PageLayout from "../components/layout";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../css/booking.css";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../utilities/auth";

function Booking(props) {
  const navigate = useNavigate();

  //Package Price
  const residentialPrice = 99.99;
  const pestPrice = 100.99;
  const commercialPrice = 68.99;
  const carpetPrice = 89.99;
  const windowPrice = 140.99;
  const movePrice = 150.99;
  const packages = [
    {
      name: "Residential Cleaning",
      price: 99.99,
      description:
        "Thorough cleaning of homes to create a clean, hygienic, and pleasant living environment for residents. Provided by professionals or companies",
    },
    {
      name: "Pest Cleaning",
      price: 100.99,
      description:
        "Eliminating pests from homes and premises to maintain a clean and safe living environment. Conducted by skilled pest control professionals.",
    },
    {
      name: "Commercial Cleaning",
      price: 68.99,
      description:
        "Cleaning and washing windows to remove dirt and streaks, ensuring clear visibility and enhancing the appearance of buildings. Done professionally.",
    },
    {
      name: "Carpet Cleaning",
      price: 89.99,
      description:
        "Professional service that cleans and sanitizes carpets, removing stains, dirt, and allergens, to ensure a fresh and hygienic living environment.",
    },
    {
      name: "Window Cleaning",
      price: 140.99,
      description:
        "Skilled service that cleans windows, removing dirt and streaks, to enhance building aesthetics and allow more natural light inside. Done professionally.",
    },
    {
      name: "Move-in/Move-out Cleaning",
      price: 150.99,
      description:
        "Comprehensive cleaning service designed for transitioning in or out of a property, leaving the space immaculate, hygienic, and ready for occupancy.",
    },
  ];

  const handleBookClick = (serviceName, price) => {
    //Check if user is already logged in
    if (Auth.loggedIn() === true) {
      <Link
        className="text-decoration-none"
        style={{ color: "black" }}
        to="/booking/scheduling"
      />;
      //pass data to the next page
      navigate("/booking/scheduling", {
        state: { service: serviceName, price: price },
      });
    } else {
      navigate("/signin");
      <Link style={{ fontWeight: "bolder" }} to="/signin">
        Sign In
      </Link>;
    }
  };

  return (
    <PageLayout>
      <Container>
        <br />
        <h1>Booking Your Services</h1>
        <br />
        {packages.map((p) => {
          return (
            <>
              <Card>
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Title>{p.price}</Card.Title>
                  <Card.Text>{p.description}</Card.Text>
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={() => handleBookClick(p.name, p.price)}
                  >
                    Book
                  </Button>
                </Card.Body>
              </Card>
              <br />
            </>
          );
        })}
      </Container>
    </PageLayout>
  );
}

export default Booking;
