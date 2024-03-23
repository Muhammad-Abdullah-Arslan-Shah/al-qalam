import React from 'react'
import { useNavigate } from "react-router-dom";
const TeacherPanel = () => {

  let navigate = useNavigate();
    const navToResultForm = ()=>{
navigate("/resultform");
    }
  return (
    <>
     <div className='container my-5'>
        <h1  className='my-5'>Welcome Teachers</h1>
        <button className='btn btn-success' onClick={navToResultForm}> Generate Result Card</button>
        </div> 
    </>
  )
}

export default TeacherPanel
