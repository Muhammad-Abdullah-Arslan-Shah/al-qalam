import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PrinMsg from "./components/PrinMsg";
import MissionMsg from "./components/MissionMsg";
import SailentFeature from "./components/sailentFeature";
import OurCampuses from "./components/OurCampuses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResultForm from "./components/ResultForm";
import TeacherPanel from "./components/TeacherPanel";
import ResultContextProvider from './context/ResultContextProvider'
import PrintResultCard from "./components/PrintResultCard";
import AdmissionForm from "./components/AddmitionForm";
import AddmitionContextProvider from "./context/AddmitionContextProvider";
import PrintAdmissionForm from "./components/PrintAddmitionForm";



function App() {
  

  return (
    <div>
   
   <AddmitionContextProvider>
   <ResultContextProvider> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission-vision" element={<MissionMsg />} />
        <Route path="/prinMsg" element={<PrinMsg />} />
        <Route path="/salient-features" element={<SailentFeature />} />
        <Route path="/campus" element={<OurCampuses />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/teacherPanel" element={<TeacherPanel/>} />
        <Route path="/resultform" element={<ResultForm />} />
        <Route path="/printResultCard" element={<PrintResultCard/>} />
        <Route path="/admissionForm" element={<AdmissionForm/>} />
        <Route path="/printAddmitionForm" element={<PrintAdmissionForm/>} />
       
      </Routes>
      </ResultContextProvider>
      </AddmitionContextProvider> 
    
    </div>
  );
}

export default App;
