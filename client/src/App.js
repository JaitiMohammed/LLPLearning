import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Landing } from "./components/layouts/Landing/Landing";
import { Menu } from "./components/layouts/Navbar/Navbar";
import About from "./pages/About";
// import Login from "./components/Login/index";
// import Team from "./pages/Team";
function App() {
  return (
    <div className='App'>
      <Router>
        <Menu />
        {/* <Route path='/login' component={Login} /> */}

        <Landing />
        <About />
        {/* <Team /> */}
      </Router>
      {/* Navbar */}
      {/* Header Landing Page */}
      {/* Section Services */}
      {/* Section Last Posts */}
      {/* Section Last Courses */}
      {/* Footer */}
    </div>
  );
}

export default App;
