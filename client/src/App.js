import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/layouts/Navbar/Navbar";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className='App'>
      <Router>
        <Menu />
        <Home />
      </Router>
      {/* Home  */}

      {/* Sections - About */}
      {/* Sections - Services */}
      {/* Latest Courses */}
      {/* Latest Blog */}
      {/* Sections - Team */}
      {/* Sections - Contacts */}
      {/* Footer */}
    </div>
  );
}

export default App;
