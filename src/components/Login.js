import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from "react-reveal/Fade"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [teacherEmail, setTeacherEmail] = useState("");
    const [teacherPswd, setTeacherPswd] = useState("");
  let navigate = useNavigate();
   
  const handleLogin = ()=>{
    if(teacherEmail==="teacher@alqalam.com"&&teacherPswd==="123"){
    navigate("/teacherPanel")
  }
  else{
    alert("Please Enter valid Credentials");
  }
  }
  return (
    <>
    <Fade right>
      <div style = {{height:"600px"}} className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 bg-light text-dark">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form>
                <div className="form-group my-3">
                  <label htmlFor="email">Email address</label>
                  <input value={teacherEmail}  type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"  onChange={(e) => setTeacherEmail(e.target.value)}/>
                </div>
                <div className="form-group my-3">
                  <label htmlFor="password">Password</label>
                  <input value={teacherPswd} type="password" className="form-control" id="password" placeholder="Password"  onChange={(e) => setTeacherPswd(e.target.value)} />
                </div>
                <button onClick ={handleLogin} type="submit" className="btn btn-success btn-block text-light">Login</button>
              </form>
              <div className="text-center mt-3 ">
                <p>Don't have an account? <Link to ="/signup">Sign up here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
    </>
  )
}

export default Login
