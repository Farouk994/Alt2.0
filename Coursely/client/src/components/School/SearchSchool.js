import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./UI/School.css";

const SearchSchool = () => {
   const [query, setQuery] = useState("");
   const [result, setResult] = useState([]);

   const searchSchool = async (e) => {
      e.preventDefault();
      try {
         const { data } = await axios.get(
            `http://localhost:5050/api/school/search-school/${query}`
         );
         // console.log(data);
         setResult(data);
         // console.log(result);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div>
         <form onSubmit={searchSchool}>
            <input
               type="search"
               onChange={(e) => {
                  setQuery(e.target.value);
                  setResult([]);
               }}
               value={query}
            ></input>
         </form>

         {result.map((r) => {
            return (
               <>
                  <br></br>

                  <div class="col-sm-6">
                     <div class="card">
                        <div class="card-body">
                           <h5 class="card-title">{r.name}</h5>

                           <Link
                              to={`/school/${r._id}`}
                              class="btn btn-primary"
                              style={{ backgroundColor: " #084c8b" }}
                           >
                              Get Report
                           </Link>
                        </div>
                     </div>
                  </div>
               </>
            );
         })}
      </div>
   );
};

// export default SearchSchool

// TODO: Display school results on search
export default SearchSchool;
