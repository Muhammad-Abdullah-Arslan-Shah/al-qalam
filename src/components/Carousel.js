import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import "../App.css";
// import pic1 from "../pictures/al-qalam student pic-1.jpg";
// import pic2 from "../pictures/al-qalam student pic-2.jpg";
import kidspic1 from '../pictures/schoolKidsPic-1.jpg';
import kidspic2 from '../pictures/schoolKidsPic-2.jpg';
import kidspic3 from '../pictures/schoolKidsPic-3.jpg';

const CarouselComponent = () => {
  const carouselContainerStyle = {    // Make object for applying style to crousel
    border: '2px solid #ddd', // Border style
    borderRadius: '10px',     // Optional: Border radius for rounded corners
    overflow: 'hidden',       // Hide overflow to prevent shadows from images going outside
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle shadow effect
  };

  return (
    <>
      <div style={carouselContainerStyle} className="mx-3 my-2"> 
        <Carousel>
          <Carousel.Item>
            <img
              height={500}
              style={{ width: "100%" }}
              src={kidspic1}
              alt="Kid pic 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={500}
              style={{ width: "100%" }}
              src={kidspic2}
              alt="Kid pic 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={500}
              style={{ width: "100%" }}
              src={kidspic3}
              alt="Kid pic 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
