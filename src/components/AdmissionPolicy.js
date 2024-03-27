import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const AdmissionPolicy = () => {
  return (
    <>
    <Header/>
    <motion.div 
      className="m-2 p-3"
      initial={{ opacity: 0,  x:-50}}
      animate={{ opacity: 1, x:0 }}
      transition={{ duration: 0.5 }}
    >
        
      <h2>Admission Policy</h2>
      <p>
        Welcome to Alqalam School! We are committed to providing quality education
        to all students who seek knowledge and growth in an Islamic environment.
      </p>
      <div className="alert alert-warning" role="alert">
        <h3>Admission Criteria</h3>
        <ul>
          <li>Students must meet age requirements for the desired grade level.</li>
          <li>Parents or guardians must complete the admission application form.</li>
          <li>Applicants may be required to undergo an entrance exam or interview.</li>
          <li>Admission priority may be given to siblings of current students or alumni.</li>
        </ul>
      </div>
      <div className="alert alert-success" role="alert">
        <h3>Admission Process</h3>
        <p>
          To apply for admission, please follow these steps:
        </p>
        <ol>
          <li>Fill out the online admission application form.</li>
          <li>Submit required documents, including academic transcripts and recommendation letters.</li>
          <li>Attend an entrance exam or interview if required.</li>
          <li>Upon acceptance, complete the enrollment process.</li>
        </ol>
      </div>
      <h3>Important Dates</h3>
      <p>
        Please refer to our academic calendar for important dates regarding admission deadlines, entrance exams, and enrollment periods.
      </p>
      <h3>Further Assistance</h3>
      <p>
        If you have any questions or need assistance with the admission process, feel free to contact our admissions office at [contact information].
      </p>
    </motion.div>
    <Footer/>
    </>
  );
}

export default AdmissionPolicy;
