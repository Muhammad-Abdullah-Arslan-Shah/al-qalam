import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../pictures/logo2.png';
const CampusCard = ({ campusName, address, country, city, principal, imageUrl }) => {
  return (
    <div className="mt-4">
      <div className="card">
        <img src={logo} className="card-img-top" alt={`${campusName} Campus`} />
        <div className="card-body">
          <h5 className="card-title">{campusName}</h5>
          <p className="card-text"><strong>Country:</strong> {country}</p>
          <p className="card-text"><strong>City:</strong> {city}</p>
          <p className="card-text"><strong>Address:</strong> {address}</p>
          <p className="card-text"><strong>Principal:</strong> {principal}</p>
        </div>
      </div>
    </div>
  );
};

export default CampusCard;
