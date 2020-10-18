import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import Landing from "./components/Landing";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        {/* <Landing /> */}
      </Router>
      {/* Navbar */}
      {/* Header Landing Page */}
      {/* Section About */}
      {/* Section Services */}
      {/* Section Last Posts */}
      {/* Section Last Courses */}
      {/* Footer */}
    </div>
  );
}

export default App;
