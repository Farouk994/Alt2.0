import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchSchool = () => {
   const [query, setQuery] = useState("");
   const [result, setResult] = useState([]);

   const searchSchool = async (e) => {
      e.preventDefault();
      try {
         const { data } = await axios.get(
            `http://localhost:5050/api/school/search-school/${query}`
         );
         console.log(data);
         setResult(data);
      //   console.log(result.data)
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div>
         <form onSubmit={searchSchool} class="form-inline my-2 my-lg-0">
            <input
               class="form-control mr-sm-2"
               type="search"
               onChange={(e) => setQuery(e.target.value)}
               value={query}
               placeholder="Search School or City"
               ></input>
            <Link 
            to={`/school/${result}`}
            class="btn btn-outline-danger my-2 my-sm-0" type="submit">
               Search
            </Link>
         </form>
      </div>
   );
};

// TODO: Display school results on search
export default SearchSchool;
