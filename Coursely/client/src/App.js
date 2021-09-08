import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllSchools from "./components/School/AllSchools";
import Navbar from "./components/Layout/Navbar/Navbar";
import GetSchool from "./components/School/GetSchool";

import Landing from "./components/Layout/Landing/Home";

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <Route exact path="/schools" component={AllSchools} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/school/:id" component={GetSchool} />
         </Router>
      </>
   );
}

export default App;
