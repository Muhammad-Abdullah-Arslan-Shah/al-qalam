import React, { useState } from "react";
import AddmitionContext from "./AddmitionContext";

const AddmitionContextProvider = ({ children }) => {
  const [studentDetail, setStudentDetail] = useState({
    name: "",
    fatherName: "",
    address: "",
    contact: "", // Remove this line to avoid duplication
    age: null, // Set initial value to null for age
    dob: null, // Set initial value to null for dob
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    gender: "", // Remove this line to avoid duplication
  });

  const [admissionDetail, setAdmissionDetail] = useState({
    admissionSoughtToClass: "",
    previousSchoolName: "",
    previousSchoolClass: "",
    previousSchoolResult:"",
  });

  return (
    <AddmitionContext.Provider
      value={{
        studentDetail,
        setStudentDetail,
        admissionDetail,
        setAdmissionDetail,
      }}
    >
      {children}
    </AddmitionContext.Provider>
  );
};

export default AddmitionContextProvider;
