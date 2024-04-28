import AnimatedCountUp from "./AnimatedCountUp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "../pictures/logo1.jpg";

const AboutText = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({ opacity: 1, x: 0 });
  }

  return (
    <div ref={ref} className="container mt-3">
      <div className="row d-flex justify-content-center  align-items-center">
        <motion.div
          className="col-lg-2 col-md-5 col-5  my-2"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 2 }}
        >
          <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{ maxHeight: "30vh", width: "100%" }}
          />
        </motion.div>
        <h1
          style={{ fontSize: "295%" }}
          className="text-center  my-2 col-lg-3 col-md-9 col-9 "
        >
          <b>
            <span className="text-dark">About</span>{" "}
            <span className="text-success">AHS</span>
          </b>
        </h1>
      </div>
      <div>
        <motion.div
          className=" mt-2"
          initial={{ opacity: 0, x: 20 }}
          animate={controls}
          transition={{ duration: 2 }}
        >
          <p className="fs-5 p-2">
            At Al-Qalam High School, we ignite minds and nurture dreams. Our
            dedicated staff are committed to empowering every student. With
            passion and expertise, they guide and inspire, fostering a
            supportive environment where each individual can thrive. Together,
            we cultivate a culture of learning, innovation, and personal growth,
            preparing students for success in an ever-changing world. At
            Al-Qalam High School, we ignite minds and nurture dreams. Our
            dedicated staff are committed to empowering every student. With
            passion and expertise, they guide and inspire, fostering a
            supportive environment where each individual can thrive. Together,
            we cultivate a culture of learning, innovation, and personal growth,
            preparing students for success in an ever-changing world.
          </p>
        </motion.div>
      </div>

      <div className="   mt-3 ">
        <div className="row    ">
          <motion.div
            style={{ marginLeft: "6.9%", margin: "2%" }}
            className="  col-lg-5 col-md-5 p-4 col-5  bg-success"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            <i className="bi bi-building text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Campuses</span>
            <br />
            <span className="text-light text-start fs-1">
              <AnimatedCountUp end={6} />
            </span>
            </motion.div>

          <motion.div
            style={{ margin: "2%" }}
            className="  col-lg-5 col-md-5 p-4 col-5   bg-info"
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            <i className="bi bi-person-arms-up text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Students</span>
            <br />
            <span className="text-light text-start fs-1">
              <AnimatedCountUp end={1000} />
            </span>
          </motion.div>

          <motion.div
            style={{ marginLeft: "6.9%", margin: "2%" }}
            className="  col-lg-5 col-md-5 p-4 col-5  bg-primary"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            <i className="bi bi-person text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Instructors</span>
            <br />
            <span className="text-light text-start fs-1">
              <AnimatedCountUp end={200} />
            </span>
          </motion.div>

          <motion.div
            style={{ margin: "2%" }}
            className="  col-lg-5 col-md-5 p-4 col-5   bg-warning"
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            <i className="bi bi-pc-display-horizontal text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2 "> Modern Labs</span>
            <br />
            <span className="text-light text-start fs-1 ">
              <AnimatedCountUp end={7} />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
