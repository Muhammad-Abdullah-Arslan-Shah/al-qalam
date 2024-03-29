import React, { useContext } from "react";
import logo from "../pictures/logo1.jpg"; // Importing the school logo
import "../resultCard.css"; // Importing CSS styles
import resultContext from "../context/ResultContext"; // Importing the context for result data
import html2canvas from "html2canvas"; // Importing html2canvas library for capturing DOM content
import jsPDF from "jspdf"; // Importing jsPDF library for generating PDFs
import prinSign from "../pictures/prinSign.png"; // Importing the principal's signature image

const PrintResultCard = (props) => {
  // Using useContext hook to access data from context
  const { uprdata, marksArray } = useContext(resultContext);

  // Function to calculate total marks
  const totalMarks = () => {
    let total = 0;
    for (let i = 0; i < marksArray.length; i++) {
      total += Number(marksArray[i].mark);
    }
    return total;
  };

  // Function to calculate obtained marks
  const ObtMarks = () => {
    let Obt = 0;
    for (let i = 0; i < marksArray.length; i++) {
      Obt += Number(marksArray[i].obtmrk);
    }
    return Obt;
  };

  // Function to capitalize strings
  function capitalize(str) {
    if (!str) return ""; // Return an empty string if str is undefined or null
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  // Function to calculate percentage
  const getPercentage = (obtainedMarks, totalMarks) => {
    return ((obtainedMarks / totalMarks) * 100).toFixed(0);
  };

  // Function to get grade based on percentage
  const getGrade = (percentage) => {
    if (percentage >= 90) {
      return "A+";
    } else if (percentage >= 80) {
      return "A";
    } else if (percentage >= 70) {
      return "B";
    } else if (percentage >= 60) {
      return "C";
    } else if (percentage >= 50) {
      return "D";
    } else if (percentage >= 40) {
      return "E";
    } else {
      return "F";
    }
  };

  // Getting grade based on obtained marks and total marks
  let grade = getGrade(getPercentage(ObtMarks(), totalMarks()));

  // Function to get teacher comments based on grade
  function getTeacherComments(grade) {
    switch (grade) {
      case "A+":
        return "Outstanding performance! You're excelling at the highest level!";
      case "A":
        return "Excellent job! Keep up the good work!";
      case "B":
        return "Well done! You're doing great!";
      case "C":
        return "Good effort, but there's room for improvement.";
      case "D":
        return "You're almost there, keep pushing!";
      case "E":
        return "You need to work harder to improve your grade.";
        case "F":
        return "You need to work harder to improve your grade.";
      default:
        return "Invalid grade. Please provide a valid grade (A+, A, B, C, D, F).";
    }
  }

  // Function to handle download of PDF
  const handleDownload = () => {
    const input = document.getElementById("result-card");

    // Using html2canvas to capture the DOM content
    html2canvas(input, { scrollY: -window.scrollY, scale: 3 }) // Adjust the scale factor as needed for better image quality
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");

        // Creating a PDF using jsPDF
        const pdf = new jsPDF({
          orientation: "portrait", // or 'landscape'
          unit: "mm",
          format: "A4",
        });

        // Calculating dimensions for A4 size
        const imgWidth = 180; // Adjusted width with margins
        const imgHeight = 260; // Adjusted height with margins

        // Add margins to position the image in the center
        const x = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
        const y = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;

        // Adding image to PDF
        pdf.addImage(imgData, "JPEG", x, y, imgWidth, imgHeight);

        // Saving PDF
        pdf.save("result_card.pdf");
      });
  };

  // JSX rendering of the result card
  return (
    <div
      className="container m-5 p-2"
      style={{ width: "800px", margin: "auto" }}
    >
      <div
        className="container-fixed double-border-container p-2"
        id="result-card"
        style={{ width: "700px", margin: "auto" }}
      >
        {/* School header */}
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
            <h2 className="school-name">Al-qalam School</h2>
            <div className="double-border-container">
              <small className="school-description mx-2 mt-3">
                Promoting Islamic ideology with a blend of modern technique
              </small>
            </div>
          </div>
        </div>
        <h2 className="m-4 text-center">Final Term Examination 2024</h2>
        {/* Student details */}
        <div className="table-responsive mt-4">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Student Name:</b> <span>{capitalize(uprdata.name)}</span>
                </td>
                <td>
                  <b>Class:</b> <span>{capitalize(uprdata.class)}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Result Status:</b> <span>{uprdata.resultStatus}</span>
                </td>
                <td>
                  <b>Position:</b> <span>{capitalize(uprdata.possition)}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Marks table */}
        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Obtained Marks</th>
                <th>Percentage</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {marksArray.map((element, index) => (
                <tr key={index}>
                  <td>{element.subject}</td>
                  <td>{element.mark}</td>
                  <td>{element.obtmrk}</td>
                  <td>{getPercentage(element.obtmrk, element.mark)}%</td>
                  <td>
                    {getGrade(getPercentage(element.obtmrk, element.mark))}
                  </td>
                </tr>
              ))}
              {/* Total marks row */}
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td>
                  <b>{totalMarks()}</b>
                </td>
                <td>
                  <b>{ObtMarks()}</b>
                </td>
                <td>
                  <b>{getPercentage(ObtMarks(), totalMarks())}%</b>
                </td>
                <td>
                  <b>{grade}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Teacher comments and signatures */}
        <div className="text-center mt-4">
          <div className="row">
            <div className="col-7">
              <p>
                <b>Teacher Comment:</b> <span>{getTeacherComments(grade)}</span>
              </p>
            </div>
            <div className="col-5">
              <p>
                <b>Class Incharge:</b>{" "}
                <span>Ms/Mr {capitalize(uprdata.teacher)}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <div className="row">
            <div className="col-6">
              <p>
                <b>Teacher's Signature:</b> <span>_______________</span>
              </p>
            </div>
            <div className="col-6">
              <p>
                <b>Principal's Signature:</b>{" "}
                <span>
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={prinSign}
                    alt="principal sign"
                  ></img>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Button to download PDF */}
      <div className="text-center mt-2">
        <button className="btn btn-lg btn-success" onClick={handleDownload}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PrintResultCard;
