import React from 'react';
import CampusCard from './CampusCard';
import Header from "./Header";
import Footer from "./Footer";
import { motion} from "framer-motion";

function OurCampuses() {
  return (
    <>
    <Header></Header>
    <motion.div
          initial={{ opacity: 0, x: -60 }} // Set initial animation properties for the logo div
          animate={{ opacity: 1, x: 0 }} // Apply animation controls
          transition={{ duration: 1.5}} // Set transition duration
        >
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-4">
          <CampusCard
            campusName="Al-Qalam High School (Abdullah Campus)"
            city="Lahore"
            country="Pakistan"
            address="Ali Alam garden,Lahore medical housing scheme,tulspura"
            principal="Miss Gulnaz Akhtar"
            imageUrl="https://example.com/campus-image.jpg" // Replace with your actual image URL
          />
        </div>
        <div className="col-md-4 mt-4">
          <CampusCard
            campusName="Al-Qalam High School (Abdul-Rehman Campus)"
            city="Lahore"
            country="pakistan"
            address="jhuggian village,khaira pul,jallo"
            principal="Miss Gulnaz Akhtar"
            imageUrl="https://example.com/campus-image.jpg" // Replace with your actual image URL
          />
        </div>
       
        <div className="col-md-4 mt-4">
          <CampusCard
            campusName="Al-Qalam High School (Fateh Garh Campus)"
            city="Lahore"
            country="Pakistan"
            address="Fateh Garh Lahore"
            principal="Mr Abdullah Ijaz"
            imageUrl="https://example.com/campus-image.jpg" // Replace with your actual image URL
          />
        </div>
      </div>
    </div>
    </motion.div>
    <Footer/>
    </>
  );
}

export default OurCampuses;
