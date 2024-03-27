import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { motion,useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer"; 

const SilentFeature = () => {
  const controls = useAnimation(); // Initialize animation controls using useAnimation hook
  const [ref, inView] = useInView(); // Initialize ref and inView variables using useInView hook
  // Trigger animation when component comes into view
  if (inView) {
    controls.start({ opacity: 1, x: 0 }); 
  }


  return (
    <>
    <Header/>
    <div className="silent-feature bg-white text-dark p-4">
    <div className="text-light bg-success mb-4 text-align-center p-3 ">
    <motion.div
           
           initial={{ opacity: 0, y: 50 }} // Set initial animation properties for the logo div
           animate={{ opacity: 1, y: 0 }} // Apply animation controls
           transition={{ duration: 1 }} // Set transition duration
         >
          

         <h1 className="text-light">Echoes of Excellence: The Silent Symphony of Al-Qalam High School</h1>
      
           </motion.div>
           </div>
     
           <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }} // Set initial animation properties for the logo div
          animate={controls} // Apply animation controls
          transition={{ duration: 0.5}} // Set transition duration
        >
      <section className="mb-4">
     
         <h3 className="text-success">
          <span className="bullet">&#8226;</span> Tranquil Learning Spaces
        </h3>
        <p>
          Al-Qalam High School prides itself on serene and purposeful learning environments.
          The classrooms are designed with a thoughtful blend of aesthetics and functionality,
          fostering an atmosphere conducive to deep concentration and intellectual growth.
        </p>
        
        
      </section>

      <section className="mb-4">
     
        <h3 className="text-success">
          <span className="bullet">&#8226;</span> Educators as Maestros
        </h3>
        <p>
          In this silent symphony, educators are the maestros shaping the minds of tomorrow.
          The faculty at Al-Qalam High School believes in the power of mentorship, guiding
          students with a harmonious blend of wisdom, encouragement, and silent support.
        </p>
          
        
      </section>

      <section className="mb-4">
        <h3 className="text-success">
          <span className="bullet">&#8226;</span> Ethical Values in Silence
        </h3>
        <p>
          The school instills a strong sense of ethical values through silent lessons woven into daily activities.
          Integrity, respect, and responsibility echo through the corridors, shaping students into not just knowledgeable individuals but also compassionate and principled citizens.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="text-success">
          <span className="bullet">&#8226;</span> Technological Whispers
        </h3>
        <p>
          Technology at Al-Qalam High School is seamlessly integrated into the curriculum, whispering the language of the future.
          Students learn to navigate the digital landscape silently, acquiring skills that empower them in a rapidly evolving world.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="text-success">
          <span className="bullet">&#8226;</span> Inclusive Silence
        </h3>
        <p>
          In the quietude of Al-Qalam High School, diversity is celebrated.
          Students from various backgrounds come together in a mosaic of cultures, languages, and perspectives, fostering an inclusive environment where everyone's silent voice is heard and respected.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="text-success">
          <span className="bullet">&#8226;</span> Extracurricular Harmony
        </h3>
        <p>
          Beyond academics, the school orchestrates a symphony of extracurricular activities.
          From silent art exhibitions to subtle sportsmanship, students are encouraged to explore and express their talents in a harmonious balance of academics and creativity.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="text-success">
          <span className="bullet">&#8226;</span> Environmental Stewardship
        </h3>
        <p>
          Al-Qalam High School is committed to a silent conversation with the environment.
          Sustainability initiatives are seamlessly integrated into the daily rhythm, teaching students the importance of preserving the planet through mindful actions.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="text-success">
          <span className="bullet">&#8226;</span> Parental Involvement
        </h3>
        <p>
          The silent partnership between the school and parents is crucial.
          Regular communication, silent collaborations, and shared values create a supportive network ensuring each student's holistic development.
        </p>
      </section>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
};

export default SilentFeature
