import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap"; // Importing form components from React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import resultContext from "../context/ResultContext"; // Importing the context for result data
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import Alert from './Alert';
const ResultForm = () => {
  const navigator = useNavigate(); // Initializing useNavigate
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>
  {
   
 setAlert(
   {  msg:message,
      type:type
   }
 )
 setTimeout(()=>{
 setAlert(null);}
 ,1000);
 }
  // States for student data
  const [studentName, setStudentName] = useState(""); // State for student's name
  const [teacherName, setTeacherName] = useState(""); // State for teacher's name
  const [studentClass, setStudentClass] = useState(""); // State for student's class
  const [resultStatus, setResultStatus] = useState(""); // State for result status (Pass/Fail)
  const [possition, setPossition] = useState(""); // State for student's position

  // States for subject marks
  const [subject, setSubject] = useState(""); // State for subject
  const [subMrk, setSubMrk] = useState(0); // State for total marks of subject
  const [obtMrk, setObtMrk] = useState(0); // State for obtained marks of subject

  // Accessing context for result data
  const {  setUprdata, marksArray, setMarksArray } = useContext(resultContext);

  // Function to handle addition of subject marks
  const handleAddBtn = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    const markObj = { subject: subject, mark: subMrk, obtmrk: obtMrk }; // Creating an object with subject details
    let markArray = marksArray; // Creating a copy of marks array
    markArray.push(markObj); // Adding new subject marks to the array
    setMarksArray(markArray); // Updating the marks array in context
    showAlert("Subject Addded Successfully","Success")
  };

  // Function to handle generation of result card
  const handleGenbtn = () => {
    // Setting student data to context
    setUprdata({
      name: studentName,
      class: studentClass,
      teacher: teacherName,
      resultStatus: resultStatus,
      possition: possition
    });
    navigator("/printResultCard"); // Navigating to the result card page
  };

  return (
    <>
    
      <div className="container">
        {/* Title */}
        <h3 className="text-center my-3">
          Please Enter Student Data to Generate Result card
        </h3>
        {/* Form container */}
        <div className="form-container border border-dark">
          <Form className="p-3">
            {/* Student details section */}
            <section className="my-4">
              <fieldset className="border p2">
                <legend className="w-auto float-none"> Student Detail</legend>
                {/* Input field for student name */}
                <Form.Group controlId="studentName" className="m-3">
                  <Form.Label>Student Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </Form.Group>
                {/* Input field for teacher name */}
                <Form.Group controlId="teacherName" className="m-3">
                  <Form.Label>Teacher Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                  />
                </Form.Group>
                {/* Input field for student class */}
                <Form.Group controlId="studentClass" className="m-3">
                  <Form.Label>Class:</Form.Label>
                  <Form.Control
                    type="text"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                  />
                </Form.Group>
                {/* Input field for result status */}
                <Form.Group controlId="resultStatus" className="m-3">
                  <Form.Label>Result Status:</Form.Label>
                  <Form.Select
                    value={resultStatus}
                    onChange={(e) => setResultStatus(e.target.value)}
                    className={
                      resultStatus === "Pass"
                        ? "bg-success"
                        : resultStatus === "Fail"
                        ? "bg-warning"
                        : ""
                    }
                  >
                    <option value="">Select</option>
                    <option value="Pass">Pass</option>
                    <option value="Fail">Fail</option>
                  </Form.Select>
                </Form.Group>
                {/* Input field for student position */}
                <Form.Group controlId="position" className="m-3">
                  <Form.Label>Position:</Form.Label>
                  <br />
                  <Form.Control
                    type="text"
                    value={possition}
                    onChange={(e) => setPossition(e.target.value)}
                  />
                </Form.Group>
              </fieldset>
            </section>
            {/* Marks detail section */}
            <section>
              <fieldset className="border p2">
                <legend className="w-auto float-none"> Marks Detail</legend>
                {/* Input field for subject selection */}
                <Form.Group controlId="subject" className="m-3">
                  <Form.Label>Subject:</Form.Label>
                  <Form.Select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="English">English</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Math">Math</option>
                    <option value="Islamyat">Islamyat</option>
                    <option value="Science">Science</option>
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="Drawing">Drawing</option>
                    <option value="Social-Study">Social-Study</option>
                  </Form.Select>
                </Form.Group>
                {/* Input field for total marks of subject */}
                <Form.Group controlId="subMrk" className="m-3">
                  <Form.Label>Total Marks:</Form.Label>
                  <Form.Control
                    type="number"
                    value={subMrk}
                    onChange={(e) => setSubMrk(e.target.value)}
                  />
                </Form.Group>
                {/* Input field for obtained marks of subject */}
                <Form.Group controlId="obtMrk" className="m-3">
                  <Form.Label>Obtained Marks:</Form.Label>
                  <Form.Control
                    type="number"
                    value={obtMrk}
                    onChange={(e) => setObtMrk(e.target.value)}
                  />
                </Form.Group>
                 {/* Button to add subject marks */}
            <div  className="mx-auto">
              <Button
                className="m-3"
                variant="dark"
                onClick={handleAddBtn}
              >
                Add Subject
              </Button>
            </div>
            <Alert alert = {alert}/>
              </fieldset>
            </section>
           
            {/* Button to generate result card */}
            <div style={{ width: "250px" }} className="mx-auto">
              <Button
                className="btn btn-lg btn-success mt-3 text-light"
                type="submit"
                onClick={handleGenbtn}
              >
                Generate Result Card
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ResultForm;

