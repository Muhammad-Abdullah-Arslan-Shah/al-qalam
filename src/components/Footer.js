import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mb-2 text-light" style={{ backgroundColor: "#154c79", padding: "30px 20px", marginTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <h4 className="my-3">
              <span className="border-bottom border-warning">
                Al-Qalam School
              </span>
            </h4>
            <p className="my-3">
              <b>Address </b>(Abdullah Campus): Ali-alam garden, lahore medical housing scheme, Tulspura,Lahore{" "}
            </p>
            <p className="my-3">
              <b>Address</b> (Abdulrehman Campus): Al-qalam school, Jhggian village, jallo,Lahore{" "}
            </p>
            <p>
              <b>Contact:</b>
              <span className="mx-2">
                {" "}
                <i className="bi bi-telephone mx-1"></i>+923096524503
              </span>
              <span className="mx-2">
                {" "}
                <i className="bi bi-envelope mx-1"></i>Email: info@ahs.edu.pk
              </span>
            </p>
            <p>
              <i className="bi bi-facebook mx-2"></i>
              <i className="bi bi-instagram mx-2"></i>
              <i className="bi bi-youtube  mx-2"></i>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="mr-5">
              <h3 className="my-3">
                <span className="border-bottom border-warning">
                  Useful Links
                </span>
              </h3>
              <Link to="/" className="d-block my-2">Home page</Link>
              <Link to="/campus" className="d-block my-2">Our Campuses</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mr-3 my-3">
              <h3 className="my-3">
                <span className="border-bottom border-warning">
                  Opening hours
                </span>
              </h3>
              <p>Gate Opening: 7:30</p>
              <p>Mon-Thurs: 8:00-1:30</p>
              <p>Friday: 8:00-12:00</p>
              <p>
                <span className="text-danger">Closed:</span>{" "}
                <span className="mx-2">Sat-Sun</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-top border-warning mt-3 pt-3">
        <small className="my-2">Copyright ©2024 AHS. All Rights Reserved</small>
      </div>
    </div>
  );
};

export default Footer;