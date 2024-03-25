import React, { useContext } from "react";
import logo from "../pictures/logo1.jpg";
import "../resultCard.css";
import AddmitionContext from "../context/AddmitionContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import prinSign from "../pictures/prinSign.png";

const PrintAdmissionForm = () => {
  const { studentDetail, admissionDetail } = useContext(AddmitionContext);

  const handleDownload = () => {
    const input = document.getElementById("admission-form");

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
        pdf.save("admission_form.pdf");
      }
    );
  };

  return (
    <div
      className="container m-5 p-2"
      style={{ width: "800px", margin: "auto" }}
    >
      <div
        className="container-fixed double-border-container p-2"
        id="admission-form"
        style={{ width: "700px", margin: "auto" }}
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
            <h2 className="school-name">Al-qalam School</h2>
            <div className="double-border-container">
              <small className="school-description mx-2 mt-3">
                Promoting Islamic ideology with a blend of modern technique
              </small>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <h2 className="col-md-9 text-center" style={{ paddingLeft: "150px" }}>
            Admission Form
          </h2>
          <div className="col-md-3 d-flex justify-content-end">
            <div
              style={{
                width: "115px",
                height: "115px",
                border: "1px solid black",
                paddingTop: "150px",
              }}
              className="p-2"
            >
              <small className="mt-3 ">Paste your picture here</small>
            </div>
          </div>
        </div>

        <h4>Student Details:</h4>
        <div className="table-responsive mt-4">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Student Name:</b> <span>{studentDetail.name}</span>
                </td>
                <td>
                  <b>Contact No:</b> <span>{studentDetail.contact}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Father's Name:</b> <span>{studentDetail.fatherName}</span>
                </td>
                <td>
                  <b>Father's Occupation:</b>{" "}
                  <span>{studentDetail.fatherOccupation}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Mother's Name:</b>
                  <span>{studentDetail.motherName}</span>
                </td>
                <td>
                  <b>Mother's Occupation:</b>
                  <span>{studentDetail.motherOccupation}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Address:</b> <span>{studentDetail.address}</span>
                </td>

                <td>
                  <b>Age:</b> <span>{studentDetail.age}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Date of Birth:</b> <span>{studentDetail.dob}</span>
                </td>
                <td>
                  <b>Gender:</b> <span>{studentDetail.gender}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Admission Details:</h4>
        <div className="table-responsive mt-4">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>Previous School Name:</b>{" "}
                  <span>{admissionDetail.previousSchoolName}</span>
                </td>
                <td>
                  <b>Previous School Class:</b>{" "}
                  <span>{admissionDetail.previousSchoolClass}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Admission Sought To Class:</b>{" "}
                  <span>{admissionDetail.admissionSoughtToClass}</span>
                </td>
                <td>
                  <b>Previous Result Status:</b>{" "}
                  <span>{admissionDetail.previousSchoolResult}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h4 className="mb-3">For office use:</h4>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <b>Allotted Roll Number:</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Registration Number:</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row" style={{ marginTop: "45px" }}>
          <div className="col-6">
            <p>
              <b>Perents's Signature:</b> <span>_______________</span>
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
      <div className="text-center mt-2">
        <button className="btn btn-lg btn-success" onClick={handleDownload}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PrintAdmissionForm;
