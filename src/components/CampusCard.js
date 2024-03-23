import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../pictures/logo2.png';
const CampusCard = ({ campusName, Address,country,city, principal, imageUrl }) => {
  return (
    <>
    <div mt-4>
    <div className="card">
      <img src={logo} className="card-img-top" alt={`${campusName} Campus`} />
      <div className="card-body">
        <h5 className="card-title">{campusName}</h5>
        <p className="card-text"><h6>Country:</h6> {country}</p>
        <p className="card-text"><h6>City:</h6> {city}</p>
        <p className="card-text"><h6>Address:</h6> {Address}</p>
        <p className="card-text"><h6>Principal:</h6> {principal}</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default CampusCard;
