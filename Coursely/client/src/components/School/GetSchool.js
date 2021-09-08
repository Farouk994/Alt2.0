import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { PDFExport } from "@progress/kendo-react-pdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UI/School.css";

const GetSchool = (props) => {
   const { id } = useParams();
   const [school, setSchool] = useState([]);
   const [student, setStudent] = useState([]);
   const notify = () =>
      toast.success("File Downloaded Successfully!", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });


   const pdfExportComponent = useRef(null);

   const handleExportWithComponent = (event) => {
      pdfExportComponent.current.save();
   };
   useEffect(() => {
      async function fetchSchool() {
         axios
            .get(`http://localhost:5050/api/school/${id}`)
            .then((res) => {
               setSchool(res.data.school);
               setStudent(res.data.school.students);
            })
            .catch((err) => {
               console.log(err);
            });
      }
      fetchSchool();
   }, []);

   return (
      <div className="container ">
         <br></br>
         <Link to="/schools">
            <button
               className="btn "
               style={{ marginBottom: "25px", color: "red" }}
            >
               <i className="fas fa-angle-double-left" style={{}}></i>
               <span style={{ color: "#084c8b" }}>
                  <strong>{"  "}Back</strong>
               </span>
            </button>
         </Link>
         <br></br>
         <PDFExport ref={pdfExportComponent} paperSize="A4">
            <div className="card">
               <ul className="box lead">
                  <li>
                     <h2>{school.name}</h2>
                  </li>
                  <li>
                     <span>Description:</span>
                     <strong>{school.description}</strong>
                  </li>
                  <li>
                     Location: <strong>{school.location}</strong>
                  </li>
                  <br></br>
                  <div>
                     <div>
                        <h4>Course List</h4>
                        <table border={2} cellPadding={5}>
                           <thead style={{ color: "#084c8b" }}>
                              <tr>
                                 <th>Name</th>
                                 <th>Course</th>
                                 <th>Grade</th>
                                 <th>City</th>
                                 <th>ID</th>
                              </tr>
                           </thead>
                           <tbody>
                              {student.map((student, index) => (
                                 <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.course[0].subject}</td>
                                    <td>{student.course[0].grade}</td>
                                    <td>{student.city}</td>
                                    <td>{student.ID}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                        <br></br>
                     </div>
                  </div>
               </ul>
            </div>
            <br></br>
         </PDFExport>
         <button
            className="btn back-btn"
            style={{ backgroundColor: "#084c8b", color: "white" }}
            onClick={() => {
               handleExportWithComponent();
               notify();
            }}
         >
            Download Report
         </button>
         <ToastContainer />
      </div>
   );
};

export default GetSchool;
