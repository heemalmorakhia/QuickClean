import PageLayout from "../components/layout";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import "../css/booking.css";
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../utilities/auth';

function Booking(props)
{
    const navigate = useNavigate();

    //Package Price
    const residentialPrice = 99.99;
    const pestPrice = 100.99;
    const commercialPrice = 68.99;
    const carpetPrice = 89.99;
    const windowPrice = 140.99;
    const movePrice = 150.99;

    
    const handleBookClick = (serviceName, price) => {

        //Check if user is already logged in
        if (Auth.loggedIn() === true) {
            
            <Link className="text-decoration-none" style={{ color: "black" }} to="/booking/scheduling" />
            //pass data to the next page
            navigate('/booking/scheduling', {state: { service: serviceName, price: price }});
        }else{
            navigate('/signin');
            <Link style={{ fontWeight: "bolder" }} to="/signin">Sign In</Link>
        }

    };


    return(
        <PageLayout>
            <Container className="text-center" style={{ padding: "50px", marginBottom: "70px" }}>
            <h1>Booking Your Services</h1>
                <Row className="row1">
                <Col className="col1">
                    <Card style={{ width: '18rem'}}>
                       
                        <Card.Body>
                            <Card.Title>Residential Cleaning</Card.Title>
                            <Card.Title>${residentialPrice}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button type="submit" variant="primary" onClick={() => handleBookClick("Residential Cleaning", residentialPrice)}>Book</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col2">
                <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>Pest Cleaning</Card.Title>
                            <Card.Title>${pestPrice}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button type="submit" variant="primary" onClick={() => handleBookClick("Pest Cleaning", pestPrice)}>Book</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col3">
                <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>Commercial Cleaning</Card.Title>
                            <Card.Title>${commercialPrice}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button type="submit" variant="primary" onClick={() => handleBookClick("Commercial Cleaning", commercialPrice)}>Book</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="row2">
                <Col className="col4">
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>Carpet Cleaning</Card.Title>
                            <Card.Title>${carpetPrice}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button type="submit" variant="primary" onClick={() => handleBookClick("Carpet Cleaning", carpetPrice)}>Book</Button>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col5">
                    <Card style={{ width: '18rem' }}>
                       
                        <Card.Body>
                            <Card.Title>Window Cleaning</Card.Title>
                            <Card.Title>${windowPrice}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button type="submit" variant="primary" onClick={() => handleBookClick("Window Cleaning", windowPrice)}>Book</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col6">
                    <Card style={{ width: '18rem' }}>
                       
                        <Card.Body>
                            <Card.Title>Move-in/Move-out Cleaning</Card.Title>
                            <Card.Title>${movePrice}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button type="submit" variant="primary" onClick={() => handleBookClick("Move-in/Move-out Cleaning", movePrice)}>Book</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </PageLayout>
        
    )
}

export default Booking;