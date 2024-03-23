import React from "react";
import Fade from "react-reveal/Fade";
const RegMsg = () => {
  return (
    <>
    <Fade bottom>
      <div
        className="container my-3 bg-success"
        style={{
          padding: "20px",
         
        }}
      >
        <div className="row">
          <div className="col-md-8">
            <h1 className="my-3 text-warning">Register Now</h1>
            <p className="my-3 text-light fs-5">
              At Al-Qalam School, registrations for Pre-school to Kindergarten
              are open year-round. For Elementary, Middle, and High School,
              registration is available from March to August. To inquire about
              registration, simply fill out the request information form. Upon
              receiving your inquiry, we'll schedule a School tour and provide
              detailed information.
            </p>
            <Fade bottom>
            <div className="row my-5">

            <div className="col mx-2 text-light">
           
            <p class="bi bi-emoji-smile-fill  fs-1 text-warning"></p>
            <h1>714</h1>
            <h3>Happy Student</h3>
            </div>

            <div className="col mx-2 text-light ">
                
            <p  class="bi bi-journal-bookmark fs-1 text-warning"></p>
            <h1>1:30</h1>
            <h3>Teacher-Student ratio</h3>
            </div>

            <div className="col mx-2 text-light">
                 
            <p  class="bi bi-mortarboard fs-1 text-warning"></p>
            <h1>30</h1>
            <h3>Year of service</h3>
            </div>

            </div>
            </Fade>




          </div>
          <div className="col-md-4 border border-light rounded p-3">
            <form>
              <div className="mb-3">
                <h3 className="text-center text-light">
                  Request-<span className="text-warning">Information</span>
                </h3>
                <label htmlFor="name" className="form-label text-light">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="class" className="form-label text-light">
                  Class
                </label>
                <input type="text" className="form-control" id="class" />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label text-light">
                  Date of Birth
                </label>
                <input type="date" className="form-control" id="dob" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-light">
                  Enter a message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
};

export default RegMsg;
