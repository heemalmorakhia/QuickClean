
import '../css/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap';
import phone from '../images/phone.svg';
import fax from '../images/fax.svg';
import emailImage from '../images/email.svg';
import PageLayout from '../components/layout';

function Contact() {
  return (
    <PageLayout>
    <div className="contact-page">
     {/* <Container className='cotact-container'> */}
            
        <div className='form-data'>
            <h1>Get In <span style={{color: "blue", fontSize:48, fontWeight:"bold"}}>Touch</span> </h1>
            <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netu</p>
            <Form>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                >
                  <Form.Control size="mid" type="text" placeholder="Name" />
                </FloatingLabel>
                <br />

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                  <Form.Control size="mid" type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <br />

                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone number"
                    className="mb-3"
                >
                  <Form.Control size="mid" type="text" placeholder="Phone" />
                </FloatingLabel>
                <br />
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <br />
                <Form.Select>
                    <option>How did you find us?</option>
                    <option>Facebook</option>
                    <option>Google Map</option>
                    <option>Instagram</option>
                    <option>Twitter</option>
                </Form.Select>
                <br />
                <Button type="submit" variant="primary" size="lg" className='submit-button'>
                  SEND
                </Button>
            </Form>

            <Container className='contact-info'>
              <Row>
                <Col md={4}>
                  <Row>
                    <Col xs={2}><img src={phone} alt='phone-img' className='phoneImg'></img></Col>
                    <Col md={10}>
                      <p className='p1'>PHONE</p>
                      <p className='p2'>902-402-4444</p>
                    </Col>
                  </Row>
                </Col>

                <Col md={4}>
                  <Row>
                    <Col xs={2}><img src={fax} alt='phone-img' className='phoneImg'></img></Col>
                    <Col md={10}>
                      <p className='p1'>FAX</p>
                      <p className='p2'>902-444-4122</p>
                    </Col>
                  </Row>
                  
                </Col>

                <Col md={4}>
                  <Row>
                    <Col xs={2}><img src={emailImage} alt='phone-img' className='phoneImg'></img></Col>
                    <Col md={10}>
                      <p className='p1'>EMAIL</p>
                      <p className='p2'>demo@demo.ca</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>


            </div>

            <div className='map'>
                <p>MAP</p>
                
            </div>
            
            {/* </Container> */}
    </div>
    </PageLayout>
  );
}

export default Contact;
