import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../pictures/logo2.png';  
import { Link } from "react-router-dom";

const Header = () => { 
  return (
    <div  className="bg-warning p-2">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6 align-self-start"> {/* Adjusted column size and added align-self-start */}
            <img src={logo} alt="Al-Qalam School Logo" className="img-fluid" style={{ height: '170px', width: '250px' }} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-5 col-5"> 
            <h1 className="font-weight-bold text-light">Al-Qalam School</h1> {/* Increased font size */}
            <p className="text-success m-0"  >Empowering Minds, Inspiring Futures</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-right "> {/* Adjusted column size */}
            <Link to="/login" className="btn btn-light m-1 btn-md">Login</Link>
            <Link to="/signup" className="btn btn-light btn-md m-1">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
