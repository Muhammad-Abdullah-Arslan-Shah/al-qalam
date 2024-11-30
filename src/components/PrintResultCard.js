import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../pictures/logo1.jpg"; // Your logo file
import "../resultCard.css"; // Your custom styles
import html2canvas from "html2canvas"; // For screenshot
import jsPDF from "jspdf"; // For PDF download
import prinSign from "../pictures/prinSign.png"; // Principal signature image

const PrintResultCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [studentData, setStudentData] = useState({
    studentName: "",
    teacherName: "",
    studentClass: "",
    resultStatus: "",
    position: "",
  });

  const [marksArray, setMarksArray] = useState([
    { subject: "Math", mark: 100, obtmrk: 95 },
    { subject: "English A", mark: 100, obtmrk: 85 },
    { subject: "English B", mark: 100, obtmrk: 80 },
    { subject: "Science", mark: 100, obtmrk: 90 },
    { subject: "History", mark: 100, obtmrk: 80 },
    { subject: "Urdu A", mark: 100, obtmrk: 88 },
    { subject: "Urdu B", mark: 100, obtmrk: 84 },
    { subject: "Islamiyat", mark: 100, obtmrk: 92 },
    { subject: "Nazra", mark: 100, obtmrk: 87 },
    { subject: "Drawing", mark: 100, obtmrk: 93 },
    { subject: "General Knowledge", mark: 100, obtmrk: 90 },
  ]);

  const handleModalToggle = () => setShowModal(!showModal);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleMarksChange = (index, field, value) => {
    const updatedMarks = [...marksArray];
    updatedMarks[index][field] = value;
    setMarksArray(updatedMarks);
  };

  const handleAddSubject = () => {
    setMarksArray([...marksArray, { subject: "", mark: 100, obtmrk: 0 }]);
  };
  const handleRemoveSubject = (index) => {
    setMarksArray(marksArray.filter((_, i) => i !== index));
  };

  const totalMarks = () =>
    marksArray.reduce((total, item) => total + Number(item.mark), 0);

  const ObtMarks = () =>
    marksArray.reduce((total, item) => total + Number(item.obtmrk), 0);

  const getPercentage = (obtainedMarks, totalMarks) =>
    ((obtainedMarks / totalMarks) * 100).toFixed(0);

  const getGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    if (percentage >= 40) return "E";
    return "F";
  };

  const getTeacherComments = (grade) => {
    const comments = {
      "A+": "Brilliant work, keep shining!",
      A: "Excellent job! Keep up the good work!",
      B: "Well done! You're doing great!",
      C: "Good effort, but there's room for improvement.",
      D: "You're almost there, keep pushing!",
      E: "You need to work harder to improve your grade.",
      F: "Significant improvement is needed.",
    };
    return comments[grade] || "Invalid grade.";
  };

  const handleDownload = () => {
    const input = document.getElementById("result-card");
    html2canvas(input, { scrollY: -window.scrollY, scale: 3 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "A4",
        });
        const imgWidth = 180;
        const imgHeight = 260;
        const x = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
        const y = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;
        pdf.addImage(imgData, "JPEG", x, y, imgWidth, imgHeight);
        pdf.save(`${studentData.studentName}_result_card.pdf`);
      }
    );
  };

  const grade = getGrade(getPercentage(ObtMarks(), totalMarks()));

  return (
    <>
      {/* Result Card */}
      <div
        className="container m-5 p-2"
        style={{ width: "800px", margin: "auto" }}
      >
        <div
          className="container-fixed double-border-container p-3"
          id="result-card"
          style={{
            width: "700px",
            margin: "auto",
            border: "4px double #000", // Double border
            padding: "15px",
          }}
        >
          <div className="result-header d-flex justify-content-center align-items-center mb-4">
            <div className="school-logo-container">
              <img
                src={logo}
                alt="School Logo"
                className="school-logo"
                style={{ width: "100px", height: "auto" }}
              />
            </div>
            <div>
              <h2 className="school-name">Al-Qalam School</h2>
              <div className="double-border-container">
                <small className="school-description mx-2 mt-3">
                  Promoting Islamic ideology with a blend of modern technique
                </small>
              </div>
            </div>
          </div>

          {/* Student Details Section */}
          <div className="student-details d-flex justify-content-between mb-3">
            <div>
              <p>
                <strong>Student Name:</strong> {studentData.studentName}
              </p>
              <p>
                <strong>Class:</strong> {studentData.studentClass}
              </p>
            </div>
            <div>
              <p>
                <strong>Result Status:</strong>{" "}
                <span
                  className={
                    studentData.resultStatus === "Pass"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {studentData.resultStatus}
                </span>
              </p>
              <p>
                <strong>Position:</strong> {studentData.position}
              </p>
            </div>
          </div>

          {/* Marks Table with Total Marks, Percentage, and Grades */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Percentage</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {marksArray.map((mark, index) => {
                const subjectPercentage = getPercentage(mark.obtmrk, mark.mark);
                const subjectGrade = getGrade(subjectPercentage);
                return (
                  <tr key={index}>
                    <td>{mark.subject}</td>
                    <td>{mark.mark}</td>
                    <td>{mark.obtmrk}</td>
                    <td>{subjectPercentage}%</td>
                    <td>{subjectGrade}</td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>{totalMarks()}</td>
                <td>{ObtMarks()}</td>
                <td>{getPercentage(ObtMarks(), totalMarks())}%</td>
                <td>{grade}</td>
              </tr>
            </tbody>
          </table>

          {/* Result Summary */}
          <div className="result-summary">
  <div className="row">
    <div className="col-6 justify-content-start">
      <p>
        <strong>Comments:</strong> {getTeacherComments(grade)}
      </p>
    </div>
    <div className="col-6 d-flex justify-content-end mt-2">
      <p>
        <strong>Teacher Name: </strong> {studentData.teacherName}
      </p>
    </div>
  </div>
</div>


          {/* Footer with Teacher and Principal Signatures */}
          <div className="row" style={{ marginTop: "45px" }}>
            <div className="col-6 d-flex justify-content-start mt-2">
              <p>
                <b>Teacher's Signature:</b> <span>_______________</span>
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end mt-2">
              <p>
                <b>Principal's Signature:</b>{" "}
                <span>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={prinSign}
                    alt="principal sign"
                  />
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center mt-2" id="action-buttons">
          <button
            className="btn btn-lg mx-2 btn-primary"
            onClick={handleModalToggle}
          >
            Edit Data
          </button>
          <button
            className="btn btn-lg mx-2 btn-success ml-3"
            onClick={handleDownload}
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* Modal for Editing */}
      <Modal show={showModal} onHide={handleModalToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Result Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Student Details</h5>
          <input
            type="text"
            name="studentName"
            value={studentData.studentName}
            onChange={handleInputChange}
            placeholder="Student Name"
            className="form-control mb-3"
          />
          <input
            type="text"
            name="studentClass"
            value={studentData.studentClass}
            onChange={handleInputChange}
            placeholder="Class"
            className="form-control mb-3"
          />
          <select
            name="resultStatus"
            value={studentData.resultStatus}
            onChange={handleInputChange}
            className="form-control mb-3"
          >
            <option value="">Select Result Status</option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>

          <input
  type="text"
  name="position"  // Removed the leading space
  value={studentData.position}
  onChange={handleInputChange}
  placeholder="Position"
  className="form-control mb-3"
/>


          <input
            type="text"
            name="teacherName"
            value={studentData.teacherName}
            onChange={handleInputChange}
            placeholder="Teacher Name"
            className="form-control mb-3"
          />
          <h5>Subjects</h5>
          {marksArray.map((mark, index) => (
            <div key={index} className="mb-3 d-flex align-items-center">
              <button
                className="btn my-1 mx-4 btn-danger mr-auto"
                onClick={() => handleRemoveSubject(index)}
              >
                X
              </button>
              <input
                type="text"
                value={mark.subject}
                onChange={(e) =>
                  handleMarksChange(index, "subject", e.target.value)
                }
                placeholder="Subject"
                className="form-control mx-2 w-100"
              />
              <input
                type="number"
                value={mark.mark}
                onChange={(e) =>
                  handleMarksChange(index, "mark", e.target.value)
                }
                placeholder="Total Marks"
                className="form-control mr-2"
              />
              <input
                type="number"
                value={mark.obtmrk}
                onChange={(e) =>
                  handleMarksChange(index, "obtmrk", e.target.value)
                }
                placeholder="Obtained Marks"
                className="form-control mx-2"
              />
            </div>
          ))}
          <button className="btn btn-secondary" onClick={handleAddSubject}>
            Add Subject
          </button>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-center mt-2" id="action-buttons">
            <button
              className="btn btn-lg btn-primary mx-4"
              onClick={handleModalToggle}
            >
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PrintResultCard;
