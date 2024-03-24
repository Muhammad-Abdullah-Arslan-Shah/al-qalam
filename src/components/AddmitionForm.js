import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddmitionContext from "../context/AddmitionContext";
 import { useNavigate } from "react-router-dom";

const AdmissionForm = () => {
  const navigator = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState(0);
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState("");

  const { studentDetail, setStudentDetail} = useContext(AddmitionContext );

const print = () => {
    setStudentDetail({
     name: studentName,
    fatherName: fatherName,
   address: address,
   contact: contact,
   age: age,
   dob: dob
  });
  console.log(studentDetail)
   navigator("/printAddmitionForm");
 };

  return (
    <>
      <div className="container">
        <h3 className="text-center my-3">
          Please Enter Student Data for Admission
        </h3>
        <div className="form-container border border-dark">
          <Form className="p-3">
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
              </fieldset>
            </section>
            <div style={{ width: "250px" }} className="mx-auto">
              <Button
                className="btn btn-lg btn-success mt-3 text-light"
                type="submit"
                onClick={print}
              >
               Print
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AdmissionForm;
