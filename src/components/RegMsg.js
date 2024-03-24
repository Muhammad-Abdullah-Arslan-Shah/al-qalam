import { motion, useAnimation } from "framer-motion";
import AnimatedCountUp from "./AnimatedCountUp";
import { useInView } from "react-intersection-observer";

const RegMsg = () => {
  const controls = useAnimation(); // Initialize animation controls using useAnimation hook
  const [ref, inView] = useInView(); // Initialize ref and inView variables using useInView hook

  // Trigger animation when component comes into view
  if (inView) {
    controls.start({ opacity: 1, y: 0 }); // Start animation to set opacity to 1 and x position to 0
  }
  return (
    <div ref={ref} className="container my-3 bg-success" style={{ padding: "20px" }}>
      <div className="row">
        <div className="col-md-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }} // Set initial animation properties for the logo div
          animate={controls} // Apply animation controls
          transition={{ duration: 2 }} // Set transition duration
        >
          {/* Registration information */}
          <h1 className="my-3 text-warning">Register Now</h1>
          <p className="my-3 text-light fs-5">
            At Al-Qalam School, registrations for Pre-school to Kindergarten
            are open year-round. For Elementary, Middle, and High School,
            registration is available from March to August. To inquire about
            registration, simply fill out the request information form. Upon
            receiving your inquiry, we'll schedule a School tour and provide
            detailed information.
          </p>
          </motion.div>
          {/* Animated numbers */}
          <div className="row my-5">
            <div className="col mx-2 text-light">
              <p className="bi bi-emoji-smile-fill fs-1 text-warning"></p>
              <AnimatedCountUp end={714} />
              <h3>Happy Student</h3>
            </div>
            <div className="col mx-2 text-light ">
              <p className="bi bi-journal-bookmark fs-1 text-warning"></p>
              <AnimatedCountUp end={6} />
              <h3>Teacher-Student ratio</h3>
            </div>
            <div className="col mx-2 text-light">
              <p className="bi bi-mortarboard fs-1 text-warning"></p>
              <AnimatedCountUp end={30} />
              <h3>Year of service</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 border border-light rounded p-3">
          {/* Request information form */}
          <form>
            <div className="mb-3">
              <h3 className="text-center text-light">
                Request-<span className="text-warning">Information</span>
              </h3>
              {/* Name input */}
              <label htmlFor="name" className="form-label text-light">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            {/* Email input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            {/* Class input */}
            <div className="mb-3">
              <label htmlFor="class" className="form-label text-light">
                Class
              </label>
              <input type="text" className="form-control" id="class" />
            </div>
            {/* Date of Birth input */}
            <div className="mb-3">
              <label htmlFor="dob" className="form-label text-light">
                Date of Birth
              </label>
              <input type="date" className="form-control" id="dob" />
            </div>
            {/* Message textarea */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-light">
                Enter a message
              </label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-warning ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegMsg;
