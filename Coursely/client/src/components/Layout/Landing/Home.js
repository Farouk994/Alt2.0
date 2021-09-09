import React from "react";
import "./Home.css";
import SearchSchool from "../../School/SearchSchool";

const Landing = () => {
   return (
      <div>
         <section id="hero" class="d-flex align-items-center">
            <div class="container" data-aos="zoom-out" data-aos-delay="100">
               <div class="row">
                  <div class="col-xl-6">
                     <h1>Get your report today</h1>
                     <SearchSchool />
                  </div>
               </div>
            </div>
         </section>

      </div>
   );
};

export default Landing;
