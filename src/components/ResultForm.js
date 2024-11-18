import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import resultContext from "../context/ResultContext";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import Header from "./Header";
import Footer from "./Footer";

const ResultForm = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  const [formData, setFormData] = useState({
    studentName: "",
    teacherName: "",
    studentClass: "",
    resultStatus: "",
    position: "",
    subject: "",
    customSubject: "",
    totalMarks: 0,
    obtainedMarks: 0,
  });

  const { studentName, teacherName, studentClass, resultStatus, position, subject, customSubject, totalMarks, obtainedMarks } = formData;

  const { setUprdata, marksArray, setMarksArray } = useContext(resultContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubject = (e) => {
    e.preventDefault();

    const selectedSubject = customSubject || subject;
    if (!selectedSubject) {
      showAlert("Please select or enter a subject!", "danger");
      return;
    }

    setMarksArray([
      ...marksArray,
      { subject: selectedSubject, mark: totalMarks, obtmrk: obtainedMarks },
    ]);

    setFormData((prev) => ({
      ...prev,
      subject: "",
      customSubject: "",
      totalMarks: 0,
      obtainedMarks: 0,
    }));

    showAlert("Subject added successfully", "success");
  };

  const handleGenerateResult = (e) => {
    e.preventDefault();

    if (!studentName || !teacherName || !studentClass || !resultStatus) {
      showAlert("Please fill in all required student details!", "danger");
      return;
    }

    setUprdata({ studentName, teacherName, studentClass, resultStatus, position });
    navigate("/printResultCard");
  };

  return (
    <>
      <Header />
      <div className="container">
        <h3 className="text-center my-3 text-success">
          Enter <span className="text-warning">Student Data</span> to Generate Result Card
        </h3>
        <div className="form-container border border-dark p-3">
          <Form>
            {/* Student Details */}
            <fieldset className="border p-3 mb-4">
              <legend>Student Details</legend>
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  name="studentName"
                  value={studentName}
                  onChange={handleInputChange}
                  placeholder="Enter student name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Teacher Name</Form.Label>
                <Form.Control
                  type="text"
                  name="teacherName"
                  value={teacherName}
                  onChange={handleInputChange}
                  placeholder="Enter teacher name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Class</Form.Label>
                <Form.Control
                  type="text"
                  name="studentClass"
                  value={studentClass}
                  onChange={handleInputChange}
                  placeholder="Enter class"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Result Status</Form.Label>
                <Form.Select
                  name="resultStatus"
                  value={resultStatus}
                  onChange={handleInputChange}
                  className={
                    resultStatus === "Pass"
                      ? "bg-success text-white"
                      : resultStatus === "Fail"
                      ? "bg-warning text-dark"
                      : ""
                  }
                >
                  <option value="">Select Status</option>
                  <option value="Pass">Pass</option>
                  <option value="Fail">Fail</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  name="position"
                  value={position}
                  onChange={handleInputChange}
                  placeholder="Enter position"
                />
              </Form.Group>
            </fieldset>

            {/* Marks Details */}
            <fieldset className="border p-3 mb-4">
              <legend>Marks Details</legend>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Select
                  name="subject"
                  value={subject}
                  onChange={handleInputChange}
                >
                  <option value="">Select Subject</option>
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
              <Form.Group className="mb-3">
                <Form.Label>Custom Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="customSubject"
                  value={customSubject}
                  onChange={handleInputChange}
                  placeholder="Enter custom subject"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Total Marks</Form.Label>
                <Form.Control
                  type="number"
                  name="totalMarks"
                  value={totalMarks}
                  onChange={handleInputChange}
                  placeholder="Enter total marks"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Obtained Marks</Form.Label>
                <Form.Control
                  type="number"
                  name="obtainedMarks"
                  value={obtainedMarks}
                  onChange={handleInputChange}
                  placeholder="Enter obtained marks"
                />
              </Form.Group>
              <Button variant="dark" onClick={handleAddSubject}>
                Add Subject
              </Button>
            </fieldset>

            {/* Generate Button */}
            <Button
              variant="success"
              className="w-100"
              onClick={handleGenerateResult}
            >
              Generate Result Card
            </Button>
          </Form>
          {alert && <Alert alert={alert} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResultForm;
