import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddmitionContext from "../context/AddmitionContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const AdmissionForm = () => {
  const navigator = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [admissionSoughtToClass, setAdmissionSoughtToClass] = useState("");
  const [previousSchoolName, setPreviousSchoolName] = useState("");
  const [previousSchoolClass, setPreviousSchoolClass] = useState("");
  const [previousSchoolResult, setPreviousSchoolResult] = useState("");

  const { studentDetail, setStudentDetail,setAdmissionDetail, admissionDetail} = useContext(AddmitionContext);

  const print = () => {
    setStudentDetail({
      name: studentName,
      fatherName: fatherName,
      fatherOccupation: fatherOccupation,
      motherName: motherName,
      motherOccupation: motherOccupation,
      address: address,
      contact: contact,
      age: age,
      dob: dob,
      gender: gender,});

      setAdmissionDetail({
      admissionSoughtToClass: admissionSoughtToClass,
      previousSchoolName: previousSchoolName,
      previousSchoolClass: previousSchoolClass,
      previousSchoolResult:previousSchoolResult

    });
    console.log(studentDetail)
    console.log(admissionDetail)
    navigator("/printAddmitionForm");
  };

  return (
    <>
    <Header/>
      <div className="container">
        <h2 className="text-center my-3 text-success">
          Please Enter <span  className="text-warning">Student Data for Admission</span>
        </h2>
        <div className="form-container border border-dark">
          <Form onSubmit ={print} className="p-3">
            <section className="my-4">
              <fieldset className="border p-2">
                <legend className="w-auto float-none"> Student Detail</legend>
                <Form.Group controlId="studentName" className="m-3">
                  <Form.Label>Student Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fatherName" className="m-3">
                  <Form.Label>Father/Guardian Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fatherOccupation" className="m-3">
                  <Form.Label>Father's Occupation:</Form.Label>
                  <Form.Control
                    type="text"
                    value={fatherOccupation}
                    onChange={(e) => setFatherOccupation(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="motherName" className="m-3">
                  <Form.Label>Mother's Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={motherName}
                    onChange={(e) => setMotherName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="motherOccupation" className="m-3">
                  <Form.Label>Mother's Occupation:</Form.Label>
                  <Form.Control
                    type="text"
                    value={motherOccupation}
                    onChange={(e) => setMotherOccupation(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="address" className="m-3">
                  <Form.Label>Address:</Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="contact" className="m-3">
                  <Form.Label>Contact:</Form.Label>
                  <Form.Control
                    type="number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="age" className="m-3">
                  <Form.Label>Age:</Form.Label>
                  <Form.Control
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="dob" className="m-3">
                  <Form.Label>Date of Birth:</Form.Label>
                  <Form.Control
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="gender" className="m-3">
                  <Form.Label>Gender:</Form.Label>
                  <Form.Control
                    as="select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>
              </fieldset>
            </section>
            <section className="my-4">
              <fieldset className="border p-2">
                <legend className="w-auto float-none"> Admission Details</legend>
                <Form.Group controlId="admissionSoughtToClass" className="m-3">
                  <Form.Label>Admission Sought To Class:</Form.Label>
                  <Form.Control
                    type="text"
                    value={admissionSoughtToClass}
                    onChange={(e) => setAdmissionSoughtToClass(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="previousSchoolName" className="m-3">
                  <Form.Label>Name of Previous School:</Form.Label>
                  <Form.Control
                    type="text"
                    value={previousSchoolName}
                    onChange={(e) => setPreviousSchoolName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="previousClass" className="m-3">
                  <Form.Label>Class in previous School:</Form.Label>
                  <Form.Control
                    type="text"
                    value={previousSchoolClass}
                    onChange={(e) => setPreviousSchoolClass(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="previousSchoolresult" className="m-3">
  <Form.Label>Class Studying or Passed from Previous School:</Form.Label>
  <Form.Control
    as="select"
    value={previousSchoolResult}
    onChange={(e) => setPreviousSchoolResult(e.target.value)}
  >
    <option value="">Select</option>
    <option value="pass">Pass</option>
    <option value="studying">Class Studying</option>
  
  </Form.Control>
    </Form.Group>
              </fieldset>
            </section>
            <div style={{ width: "250px" }} className="mx-auto">
              <Button
                className="btn btn-lg  btn-success mt-3 text-light"
                type="submit"
                
              >
               Submit 
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AdmissionForm;
