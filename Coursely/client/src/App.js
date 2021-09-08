import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllSchools from "./components/School/AllSchools";
import Navbar from "./components/Layout/Navbar/Navbar";
import GetSchool from "./components/School/GetSchool";
// import GetSchoolId from "./components/School/GetSchoolId";
import Landing from "./components/Layout/Landing/Home";
// import Footer from "./components/Layout/Footer/Footer";

function App() {
   return (
      // <Provider store={store}>
      <>
         <Router>
            <Navbar />
            <Route exact path="/schools" component={AllSchools} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/school/:id" component={GetSchool} />
         </Router>
         {/* <Footer /> */}
      </>
      // </Provider>
   );
}

export default App;
