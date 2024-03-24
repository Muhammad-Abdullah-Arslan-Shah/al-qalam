import React,{useState} from "react";
import ResultContext from "./ResultContext";

const ResultContextProvider = ({children}) => {
   
    
    const [uprdata, setUprdata] = useState({
        name: "",
        class: "",
        resultStatus: "",
        teacherName: "",
        possition:""
      });
      const [marksArray,setMarksArray]=useState([]);
    return(
        <ResultContext.Provider value={{uprdata,setUprdata,marksArray,setMarksArray }}>
        {children}
        </ResultContext.Provider>
    )
}

export default ResultContextProvider