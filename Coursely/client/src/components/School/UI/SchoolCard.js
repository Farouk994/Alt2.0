import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./School.css";
import Loader from "../../Layout/Loader/Loader";
import API from "../../../utils/API";

const SchoolCard = () => {
   const [schools, setSchool] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
         async function fetchData() {
         setLoading(true);
         API.getSchools()
            .then((res) => {
               setSchool(res.data);
               setLoading(false)
            })
            .catch((err) => {
               console.log(err);
               setLoading(false)
            });
      }
      fetchData();
   }, []);

   return (
      <div>
         {loading ? (
            <Loader loading={true} />
         ) : (
            schools.map((school, index) => {
               return (
                  <>
                     <br></br>
                     <div className="card ">
                        <ul className="box lead" key={index}>
                           <li>
                              <h2>{school.name}</h2>
                           </li>
                           <li>
                              <strong>{school.description}</strong>
                           </li>
                           <li>
                              <strong>{school.location}</strong>
                           </li>
                           <li>
                              # of Students:{" "}
                              <strong
                                 style={{ color: "green", fontSize: "30px" }}
                              >
                                 {school.students.length}
                              </strong>
                           </li>
                        </ul>
                        <div>
                           <div className="my-2">
                              <Link
                                 to={`/school/${school._id}`}
                                 className="btn"
                                 style={{
                                    backgroundColor: "#084c8b",
                                    color: "white",
                                 }}
                              >
                                 Get Report
                              </Link>
                           </div>
                        </div>
                     </div>
                     <br></br>
                  </>
               );
            })
         )}
      </div>
   );
};

export default SchoolCard;
