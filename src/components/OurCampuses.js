import React from 'react'
import CampusCard from './CampusCard';
import Fade from 'react-reveal/Fade';
function OurCampuses() {
  return (
    <>
      <div className="container">
      <div className="row">
<Fade bottom>
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
        </Fade>
        <Fade bottom>
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
        </Fade>
        <Fade bottom>
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
        </Fade>
        <Fade bottom>
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
        </Fade>
       
      </div>
    </div> 
    </>
  )
}

export default OurCampuses
