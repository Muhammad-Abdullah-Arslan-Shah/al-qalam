import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion} from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherPswd, setTeacherPswd] = useState('');
  let navigate = useNavigate();

  const handleLogin = () => {
    if (teacherEmail === 'teacher@alqalam.com' && teacherPswd === '123') {
      navigate('/teacherPanel');
    } else {
      alert('Please Enter valid Credentials');
    }
  };

  return (
    <>
      <Header/>
      <motion.div
          initial={{ opacity: 0, x: -60 }} // Set initial animation properties for the logo div
          animate={{ opacity: 1, x: 0 }} // Apply animation controls
          transition={{ duration: 1}} // Set transition duration
        >
      <div className="login-container p-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5 bg-light text-dark" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form>
                  <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input
                      value={teacherEmail}
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(e) => setTeacherEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input
                      value={teacherPswd}
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setTeacherPswd(e.target.value)}
                    />
                  </div>
                  <button onClick={handleLogin} type="button" className="btn btn-success btn-block text-light">
                    Login
                  </button>
                </form>
                <div className="text-center mt-3 ">
                  <p>
                    Don't have an account? <Link to="/signup">Sign up here</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      <Footer/>
    </>
  );
};

export default Login;
