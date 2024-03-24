import React,{useState} from "react";
import AddmitionContext from "./AddmitionContext";

const AddmitionContextProvider = ({children}) => {
    const [studentDetail, setStudentDetail] = useState({
        name: "",
               fatherName: "",
               address: "",
               contact: "",
               age: "",
               dob: ""
      });
      
    return(
        <AddmitionContext.Provider value={{studentDetail,setStudentDetail }}>
        {children}
        </AddmitionContext.Provider>
    )
}

export default AddmitionContextProvider