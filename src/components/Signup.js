import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Signup = () => {
  return (
    <>
    <Header/>
    <div style={{ height: "600px" }} className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 bg-light text-dark">
            <div  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }} className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form>
                <div className="form-group my-2">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-2">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-success btn-block my-2 text-light">Sign Up</button>
              </form>
              <div className="text-center mt-3">
                <p>Already have an account? <Link to="/login">Login here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Signup;
