import React from 'react';
import CampusCard from './CampusCard';
import Header from "./Header";
import Footer from "./Footer";
function OurCampuses() {
  return (
    <>
    <Header></Header>
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-4">
          <CampusCard
            campusName="Al-Qalam High School (Abdullah Campus)"
            city="Lahore"
            country="Pakistan"
            Address="Ali Alam garden,Lahore medical housing scheme,tulspura"
            principal="Mr's Gulnaz Akhtar"
            imageUrl="https://example.com/campus-image.jpg" // Replace with your actual image URL
          />
        </div>
        <div className="col-md-4 mt-4">
          <CampusCard
            campusName="Al-Qalam High School (Abdul-Rehman Campus)"
            city="Lahore"
            country="pakistan"
            Address="jhuggian village,khaira pul,jallo"
            principal="Mr's Gulnaz Akhtar"
            imageUrl="https://example.com/campus-image.jpg" // Replace with your actual image URL
          />
        </div>
        <div className="col-md-4 mt-4">
          <CampusCard
            campusName="Al-Qalam High School (Abdullah Campus)"
            city="Lahore"
            country="Pakistan"
            Address="Ali Alam garden,Lahore medical housing scheme,tulspura"
            principal="Mr's Gulnaz Akhtar"
            imageUrl="https://example.com/campus-image.jpg" // Replace with your actual image URL
          />
        </div>
        <div className="col-md-4 mt-4">
          <CampusCard
            campusName="Al-Qalam High School (Abdullah Campus)"
            city="Lahore"
            country="Pakistan"
            Address="Ali Alam garden,Lahore medical housing scheme,tulspura"
            principal="Mr's Gulnaz Akhtar"
            imageUrl="https://example.com/campus-image.jpg" // Replace with your actual image URL
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default OurCampuses;
