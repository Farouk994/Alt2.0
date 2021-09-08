import { NavLink } from "react-router-dom";
import React from "react";
import "./Navbar.css";

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
                       
                     >
                        Schools
                     </NavLink>
                  </li>
               
               </ul>
              
            </div>
         </nav>
      </>
   );
}

export default Navbar;
