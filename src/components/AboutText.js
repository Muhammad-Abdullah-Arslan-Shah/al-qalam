import AnimatedCountUp from "./AnimatedCountUp";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation from Framer Motion library
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer library
import logo from "../pictures/logo1.jpg"; // Import the logo image

const AboutText = () => {
  const controls = useAnimation(); // Initialize animation controls using useAnimation hook
  const [ref, inView] = useInView(); // Initialize ref and inView variables using useInView hook

  // Trigger animation when component comes into view
  if (inView) {
    controls.start({ opacity: 1, x: 0 }); // Start animation to set opacity to 1 and x position to 0
  }

  return (
    
    <div ref={ref} className="container mt-3"> {/* Apply ref to the wrapper div */}
      <h1 className="text-center mt-3 md-3 ">
        <b>
          <span className="text-dark">About</span>{" "}
          <span className="text-success">AHS</span>
        </b>
      </h1>

      <div className="row">
        <motion.div
          className="col-lg-4 my-4"
          initial={{ opacity: 0, x: -50 }} // Set initial animation properties for the logo div
          animate={controls} // Apply animation controls
          transition={{ duration: 2 }} // Set transition duration
        >
          <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{ height: "400px", width: "100%" }}
          />
        </motion.div>
        <motion.div
          className="col-lg-8 mt-5"
          initial={{ opacity: 0, x: 20 }} // Set initial animation properties for the text div
          animate={controls} // Apply animation controls
          transition={{ duration: 2 }} // Set transition duration
        >
          <p className="fs-5">
            At Al-Qalam High School, we ignite minds and nurture dreams. Our
            dedicated staff are committed to empowering every student. With
            passion and expertise, they guide and inspire, fostering a
            supportive environment where each individual can thrive. Together,
            we cultivate a culture of learning, innovation, and personal
            growth, preparing students for success in an ever-changing world.
            At Al-Qalam High School, we ignite minds and nurture dreams. Our
            dedicated staff are committed to empowering every student. With
            passion and expertise, they guide and inspire, fostering a
            supportive environment where each individual can thrive. Together,
            we cultivate a culture of learning, innovation, and personal
            growth, preparing students for success in an ever-changing world.
          </p>
        </motion.div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg p-4 m-3 bg-success">
            <i className="bi bi-building text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Campuses</span>
            <br />
            <span className="text-light text-start fs-1"><AnimatedCountUp end={6} /></span>
          </div>

          <div className="col-lg p-4 m-3 bg-info">
            <i className="bi bi-person-arms-up text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Students</span>
            <br />
            <span className="text-light text-start fs-1"><AnimatedCountUp end={1000} /></span>
          </div>

          <div className="col-lg p-4 m-3 bg-primary">
            <i className="bi bi-person text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Instructors</span>
            <br />
            <span className="text-light text-start fs-1"> <AnimatedCountUp end={200} /></span>
          </div>

          <div className="col-lg p-4 m-3 bg-warning">
            <i className="bi bi-pc-display-horizontal text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Modern Labs</span>
            <br />
            <span className="text-light text-start fs-1"><AnimatedCountUp end={7}/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
