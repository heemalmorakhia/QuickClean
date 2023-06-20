import React from "react";
import Logo from "../logo.png";

function Footer() {
  return (
    <footer>
      <div>
        <div
          className="WrostDesignIHaveSeenInMyLife"
          style={{ marginBottom: "30px" }}
        ></div>
        <div class="container">
          <div class="row">
            <div className="col-sm mb-4">
              <div className="row logo-footer-div">
                <img className="logo-footer" src={Logo} alt="company logo" />
              </div>
              <div className="row">
                <span className="fw-bold"> QuickClean Services Ltd.</span>
              </div>
              <div className="row">
                <p>
                  26 Earth Road, <br />
                  Mars, <br />
                  K2-U.
                </p>
              </div>
            </div>
            <div className="col-sm mb-5">
              <h4>Services</h4>
              <div className="footerList ">
                <ul className="list-group ">
                  <li className="list-group-item">Cleaning</li>
                  <li className="list-group-item">Pest Control</li>
                  <li className="list-group-item">Dummy</li>
                </ul>
              </div>
            </div>
            <div className="col-sm mb-5">
              <h4>Blogs</h4>
              <div className="footerList">
                <ul className="list-group ">
                  <li className="list-group-item">Recommendation</li>
                  <li className="list-group-item">Tips & Tricks</li>
                  <li className="list-group-item">Community</li>
                </ul>
              </div>
            </div>
            <div className="col-sm mb-5">
              <h4>Resources</h4>
              <div className="footerList">
                <ul className="list-group ">
                  <li className="list-group-item">Help Center</li>
                </ul>
              </div>
            </div>
            <div className="col-sm">
              <h4>Company</h4>
              <div className="footerList ">
                <ul className="list-group ">
                  <li className="list-group-item">About Us</li>
                  <li className="list-group-item">Testimonias</li>
                  <li className="list-group-item">Terns of Services</li>
                  <li className="list-group-item">Privacy Policy</li>
                  <li className="list-group-item">Cookie Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <h6>&copy; QuickClean Services Ltd.</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
