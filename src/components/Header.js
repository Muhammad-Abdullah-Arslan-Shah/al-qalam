import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../pictures/logo2.png';  
import { Link } from "react-router-dom";
import "../Header.css";
import SchoolNavbar from './SchoolNavbar';


const Header = () => { 
 

  return (
    <>
    <div className='bg-warning'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 d-flex justify-content-start align-items-center p-3">
         
            <div className="logo-container">
              <img src={logo} alt="School Logo" className="logo img-fluid p-1" />
            </div>
           
            <div >
              <h2 className="schoolName text-light mb-0">Al-Qalam School</h2>
              <small className="description mx-2 mt-1 text-success">Empowering Minds, Inspiring Futures</small>
            </div>
           
          </div>
         
          <div  className=" col-md-2 d-flex justify-content-end align-items-center p-2">
            <Link to="/login" className="btn btn-light m-1 btn-md">Login</Link>
            <Link to="/signup" className="btn btn-light btn-md m-1">Signup</Link>
            </div>
          
        </div>
      </div>
    </div>
    
    <SchoolNavbar/>
   
    </>

  );
};

export default Header;
