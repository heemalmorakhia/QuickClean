import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import PageLayout from "../components/layout";

function FaqPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <PageLayout>
      <div className="vh-100 pt-5">
        <div className="container">
          <div className="container faqHeader text-start">
            {isMobile ? <h1>FAQs</h1> : <h1>Frequently Asked Questions</h1>}
          </div>

          <div className="qAndA pt-5">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How can I refund money?</Accordion.Header>
                <Accordion.Body className="text-start">
                  Reach out to us from our <a href="contact">Contact Us</a>{" "}
                  page. Please include all the details of your service and any
                  comments you would like to help us easily process your refund.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How can I book services?</Accordion.Header>
                <Accordion.Body className="text-start">
                  To book services with us, you would have to create an account
                  with us first. Please do so using the{" "}
                  <a href="/signup">Sign-up</a> or if you already have an
                  account, please use the <a href="/signin">Sign-in</a> page.
                  Once you are logged in, head to the{" "}
                  <a href="/booking">Booking</a> page where you will see the
                  services we offer and can intuitively proceed from there.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Do not know what kind of services you are looking for?
                </Accordion.Header>
                <Accordion.Body className="text-start">
                  Reach out to us using the <a href="/contact">Contact Us</a>{" "}
                  page. Describe your requirements in detail and our experts
                  will help you determine which package is the best for you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Do not see the cleaning service you want?
                </Accordion.Header>
                <Accordion.Body className="text-start">
                  Reach out to us using the <a href="/contact">Contact Us</a>{" "}
                  page. Describe your requirements in detail and our experts
                  will help you create a custom package that is the best for
                  you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Want to leave a review?</Accordion.Header>
                <Accordion.Body className="text-start">
                  Once you login, head over to the{" "}
                  <a href="/mybookings">My Bookings</a> page where once your
                  service is complete, you would be able to see the option to
                  leave a review.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default FaqPage;
