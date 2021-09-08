import { NavLink } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import SearchSchool from "../../School/SearchSchool";

function Navbar() {
   return (
      <>
         <nav className="navbar">
            <div className="nav-container container">
               <NavLink exact to="/" className="nav-logo nav_link logo">
                  Coursel<span className="dot">y</span>
               </NavLink>

               <ul className="nav-menu active nav-menu">
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        className="nav-links"
                        // onClick={handleClick}
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/schools"
                        activeClassName="active"
                        className="nav-links"
                        // onClick={handleClick}
                     >
                        Schools
                     </NavLink>
                  </li>
                  {/* <li className="nav-item">
                     <NavLink
                        exact
                        to="/school"
                        activeClassName="active"
                        className="nav-links"
                        // onClick={handleClick}
                     >
                        Become a member
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/login"
                        activeClassName="active"
                        className="nav-links"
                        // onClick={handleClick}
                     >
                        Profile
                     </NavLink>
                  </li> */}
                  {/* <li className="nav-item"> */}
                  {/* <form class="form-inline my-2 my-lg-0">
                     <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search School"
                        aria-label="Search"
                     ></input>
                     <button
                        class="btn btn-outline-danger my-2 my-sm-0"
                        type="submit"
                     >
                        Search
                     </button>
                  </form> */}
                  <SearchSchool/>
                  {/* </li> */}
               </ul>
               {/* <div className="nav-icon" onClick={handleClick}>
                  <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
               </div> */}
            </div>
         </nav>
      </>
   );
}

export default Navbar;
