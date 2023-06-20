
import '../css/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, FloatingLabel, Button, Alert} from 'react-bootstrap';
import phone from '../images/phone.svg';
import fax from '../images/fax.svg';
import emailImage from '../images/email.svg';
import PageLayout from '../components/layout';
import { useState } from 'react';

function Contact() {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const nameRegex = /^[A-Za-z]/;

  const phoneRegex = /^[0-9]{6,}$/;

  const commnetsRegex = /^[A-Za-z0-9, .*@#%!^&$()_:;"<>?~`+-}{]{1,}$/;
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [option, setOption] = useState("");

  const handleName = (e) =>
  {
      setName(e.target.value);
  }

  const handleEmail = (e) =>
  {
      setEmail(e.target.value);
  }

  const handlePhone = (e) =>
  {
      setPhone(e.target.value);
  }

  const handleComments = (e) =>
  {
    setComments(e.target.value);
  }

  let count = 4;
  const [show, setShow] = useState(false);
  


  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if(!emailRegex.test(email))
    {
      document.querySelector("#email-fill").style.borderColor="#f5120a";
      count--;
    }

    if(!nameRegex.test(name))
    {
      document.querySelector("#name-fill").style.borderColor="#f5120a";
      count--;
    }

    if(!phoneRegex.test(phoneNum))
    {
      document.querySelector("#phone-fill").style.borderColor="#f5120a";
      count--;
    }

    if(!commnetsRegex.test(comments))
    {
      document.querySelector("#comments-fill").style.borderColor="#f5120a";
      count--;
    }

    if(count === 4)
    {
      setShow(true);
     
    }

  }

  const handleAlert = () =>
  {
    setShow(false);
    window.location.reload()
  }
 


  return (
    <PageLayout>
    <div className="contact-page">
     {/* <Container className='cotact-container'> */}

     {show && (<Alert variant="success" onClose={() => setShow(false)}>
          <Alert.Heading>Successfully Sent!</Alert.Heading>
          <p>
            Thanks for your contact! We will get back to you as soon as possible!
            If you have any other questions please contact us again!
            <br></br>
          </p>
          <Button onClick={handleAlert} variant="outline-success">
            Close
          </Button>
        </Alert>)}

        <div className='form-data'>
            <h1 style={{fontSize:48, fontWeight:"bold"}}>Get In <span style={{color: "blue", fontSize:48, fontWeight:"bold"}}>Touch</span> </h1>
            <p>Contact us for spotless cleaning services for your home or office. We provide tailored solutions and are ready to assist you!</p>
            <Form>

                <FloatingLabel
                    controlId="floatingInput"
                    label={<span>Name <span style={{color: 'red'}}>*</span></span>}
                    className="mb-3"
                >
                  <Form.Control onChange={handleName} size="mid" type="text" placeholder="Name" id="name-fill"/>
                </FloatingLabel> 
                <br />

                <FloatingLabel
                    controlId="floatingInput"
                    label={<span>Email address <span style={{color: 'red'}}>*</span></span>}
                    className="mb-3"
                >
                  <Form.Control onChange={handleEmail} size="mid" type="email" placeholder="name@example.com" id="email-fill" />
                </FloatingLabel>
                <br />

                <FloatingLabel
                    controlId="floatingInput"
                    label={<span>Phone <span style={{color: 'red'}}>*</span></span>}
                    className="mb-3"
                >
                  <Form.Control onChange={handlePhone} size="mid" type="text" placeholder="Phone" id="phone-fill" />
                </FloatingLabel>
                <br />
                <FloatingLabel controlId="floatingTextarea2" label={<span>Comments <span style={{color: 'red'}}>*</span></span>}>
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    id="comments-fill"
                    onChange={handleComments}
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
                <Button onClick={handleSubmit} type="submit" variant="primary" size="lg" className='submit-button'>
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
