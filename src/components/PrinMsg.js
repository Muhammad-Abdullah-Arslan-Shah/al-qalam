import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import { motion,useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer library
const PrinMsg = () => {
  const controls = useAnimation(); // Initialize animation controls using useAnimation hook
  const [ref, inView] = useInView(); // Initialize ref and inView variables using useInView hook
  // Trigger animation when component comes into view
  if (inView) {
    controls.start({ opacity: 1, y: 0 }); // Start animation to set opacity to 1 and x position to 0
  }
  return (
    <>
    <Header/>
    <div className='m-4'>
      <Card>
        <Card.Header className='align-center bg-success'>
        <motion.div
           
          initial={{ opacity: 0, y: 50 }} // Set initial animation properties for the logo div
          animate={{ opacity: 1, y: 0 }} // Apply animation controls
          transition={{ duration: 1 }} // Set transition duration
        >
          <h1 className='m-3 p-3 text-light'>Principal Message</h1>
          </motion.div>
        </Card.Header>
        <Card.Body>
          <p>
            As the proud principal of Al-Qalam High School, it is my pleasure to welcome you to our esteemed institution. At Al-Qalam, we are dedicated to providing an exceptional educational experience that not only nurtures academic excellence but also instills strong Islamic values and principles.
          </p>
          <p>
            Our commitment to fostering a holistic learning environment is rooted in the belief that education goes beyond textbooks and classrooms. We strive to create a space where students are not only empowered with knowledge but also inspired to become compassionate, ethical, and responsible individuals.
          </p>
          <p>
            Al-Qalam High School is more than just a place of learning; it is a community that values diversity, respect, and a shared commitment to personal and collective growth. We encourage our students to explore their passions, embrace challenges, and develop the skills necessary to thrive in an ever-changing world.
          </p>
          <p>
            Together with our dedicated faculty and staff, we aim to nurture the minds and hearts of our students, preparing them to become confident leaders who positively contribute to society. I invite you to join us on this exciting journey of knowledge, character development, and spiritual growth.
          </p>
          <p>
            Thank you for choosing Al-Qalam High School. We look forward to partnering with you in shaping a bright and promising future for our students.
        
          </p>
          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }} // Set initial animation properties for the logo div
          animate={controls} // Apply animation controls
          transition={{ duration: 2 }} // Set transition duration
        >
          <h6>Sincerely,</h6>
          <h6>Miss Gulnaz Akhtar</h6>
          <h6>Al-Qalam High School</h6>
          </motion.div>
        </Card.Body>
      </Card>
    </div>
    <Footer/>
    </>
  );
};

export default PrinMsg;
