import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const TeacherPanel = () => {

  let navigate = useNavigate();
    const navToResultForm = ()=>{
navigate("/resultform");
    }
  return (
    <>
   <Header/>
     <div className='container my-5'>
        <h1 style={{fontSize:"60px"}} className='my-5 text-warning'>Welcome <span  className=' text-success'>Teachers</span> </h1>
        <button  style={{fontSize:"25px"}}className='btn btn-success' onClick={navToResultForm}> Generate Result Card</button>
        </div> 
    </>
  )
}

export default TeacherPanel
