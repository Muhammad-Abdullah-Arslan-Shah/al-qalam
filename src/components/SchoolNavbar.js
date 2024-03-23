import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const SchoolNavbar = () => {
  
  return (
    <div className='container'>
      <Navbar bg="white" variant="light" expand="lg" className="fs-5 sticky-top"> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">Home</Link>
            <NavDropdown  title="About Us" id="basic-nav-dropdown" >
             
              <Link to="/prinMsg" className="dropdown-item fs-5" >Principal Message</Link>
              <Link to="/mission-vision" className="dropdown-item fs-5">Mission & Vision</Link>
              <Link to="/salient-features" className="dropdown-item fs-5">Salient Features</Link>
              
            
            </NavDropdown>
            <Link to="/campus" className="nav-link">Our Campuses</Link>
           
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SchoolNavbar;
