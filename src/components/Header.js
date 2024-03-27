import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../pictures/logo2.png';  
import { Link } from "react-router-dom";
import "../Header.css";
import SchoolNavbar from './SchoolNavbar';
import { motion} from "framer-motion"; // Import motion and useAnimation from Framer Motion library

const Header = () => { 
 

  return (
    <>
    <div className='bg-warning'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 d-flex justify-content-start align-items-center p-3">
          <motion.div
          initial={{  opacity: 0,x: -50 }} // Set initial animation properties for the logo div
          animate={{ opacity: 1 ,x: 0 }} // Apply animation controls
          transition={{ duration: 0.3 }} // Set transition duration
        >
            <div className="logo-container">
              <img src={logo} alt="School Logo" className="logo img-fluid p-1" />
            </div>
            </motion.div>
            <motion.div
          initial={{ opacity: 0, y: 50 }} // Set initial animation properties for the logo div
          animate={{ opacity: 1, y: 0 }} // Apply animation controls
          transition={{ duration: 0.3 }} // Set transition duration
        >
            <div >
              <h2 className="schoolName text-light mb-0">Al-Qalam School</h2>
              <small className="description mx-2 mt-1 text-success">Empowering Minds, Inspiring Futures</small>
            </div>
            </motion.div>
          </div>
          <motion.div
           className=" col-md-2 d-flex justify-content-end align-items-center p-2"
          initial={{ opacity: 0, x: 50 }} // Set initial animation properties for the logo div
          animate={{ opacity: 1,x: 0 }} // Apply animation controls
          transition={{ duration: 0.3 }} // Set transition duration
        >
          
            <Link to="/login" className="btn btn-light m-1 btn-md">Login</Link>
            <Link to="/signup" className="btn btn-light btn-md m-1">Signup</Link>
          
          </motion.div>
        </div>
      </div>
    </div>
    
    <SchoolNavbar/>
   
    </>

  );
};

export default Header;
