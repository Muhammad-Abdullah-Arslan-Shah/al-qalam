import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import { motion} from "framer-motion";
const MissionMsg = () => {
  return (
    <>
    <Header/>
    <motion.div
          initial={{ opacity: 0, x: -60 }} // Set initial animation properties for the logo div
          animate={{ opacity: 1, x: 0 }} // Apply animation controls
          transition={{ duration: 1.5}} // Set transition duration
        >
    <div className="container mission-container mt-5 p-4 bg-white shadow">
      <div>
        <h1 className="mb-4 text-success">Mission</h1>
        <p className="text-dark">
          At Al-Qalam School, our mission is to nurture the holistic development of every student, fostering a love for knowledge, strong moral character, and a deep sense of social responsibility. Grounded in Islamic values, we strive to provide a dynamic learning environment that encourages critical thinking, creativity, and a lifelong commitment to learning. Our dedicated educators are committed to empowering students with the skills and values needed to excel academically, contribute positively to society, and navigate the challenges of the modern world with confidence and integrity.
        </p>
      </div>
      <div>
        <h1 className="mt-5 mb-4 text-success">Vision</h1>
        <p className="text-dark">
          Our vision at Al-Qalam School is to be a leading institution of academic excellence and moral leadership, where students are inspired to embrace the principles of Islam and achieve their highest potential. We envision a learning community that promotes a culture of respect, compassion, and inclusivity, fostering an atmosphere where diversity is celebrated, and every individual feels valued. Through innovative teaching methods and a commitment to continuous improvement, we aspire to equip our students with the knowledge, skills, and character to thrive in a globalized world while upholding the principles of justice, compassion, and service to humanity.
        </p>
      </div>
    </div>
    </motion.div>
    <Footer/>
    </>
  );
};

export default MissionMsg;
