import logo from "../pictures/logo1.jpg";
import React from "react";
import Fade from "react-reveal/Fade";

const AboutText = () => {
  return (
    <div className="container mt-3">
      <Fade top>
        <h1 className="text-center mt-3 md-3 ">
          <b>
            <span className="text-dark">About</span>{" "}
            <span className="text-success">AHS</span>
          </b>
        </h1>
      </Fade>
      
        <div className="row">
        <Fade left>
          <img
            src={logo}
            alt="logo"
            className="col-lg-4 my-4"
            style={{ height: "400px" }}
          />
</Fade>
          <div className="col-lg-8 mt-5">
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
          </div>
        </div>
      <div className="conatainer">
      <div className="row mt-5">
        <Fade right>
          <div className="col-lg p-4 m-3 bg-success">
            <i className="bi bi-building text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Campuses</span>
            <br />
            <span className="text-light text-start fs-1">06</span>
          </div>
        </Fade>

        <Fade right>
          <div className="col-lg p-4 m-3 bg-info">
            <i class="bi bi-person-arms-up text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Students</span>
            <br />
            <span className="text-light text-start fs-1">1000</span>
          </div>
        </Fade>
        <Fade right>
          <div className="col-lg p-4 m-3 bg-primary">
            <i class="bi bi-person text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Instructors</span>
            <br />
            <span className="text-light text-start fs-1"> 200</span>
          </div>
        </Fade>
        <Fade right>
          <div className="col-lg p-4 m-3 bg-warning">
            <i class="bi bi-pc-display-horizontal text-light fs-2 ml-3"></i>
            <span className="text-light text-start fs-2"> Modern Labs</span>
            <br />
            <span className="text-light text-start fs-1">40</span>
          </div>
        </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
