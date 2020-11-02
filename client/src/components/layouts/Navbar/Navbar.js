import React, { useState } from "react";
import Logo from "../../../assets/OthersPictures/logo.png";
import "./Style.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export const Menu = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      fixed='top'
      className={navbar ? "navbar active" : "navbar"}
    >
      <Navbar.Brand>
        <Link to='/home'>
          <img src={Logo} alt='logo' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' bg='light'>
        <Nav className='mr-auto menu-left'>
          <Nav.Link>
            <NavLink
              to='/home'
              style={{ color: "black" }}
              activeClassName='navbar__link--active'
            >
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink to='#about' style={{ color: "black" }}>
              About
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink to='#team' style={{ color: "black" }}>
              Team
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              activeClassName='navbar__link--active'
              to='/blog'
              style={{ color: "black" }}
            >
              Blog
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              activeClassName='navbar__link--active'
              to='/courses'
              style={{ color: "black" }}
            >
              Courses
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink to='#contact' style={{ color: "black" }}>
              Contact us
            </HashLink>
          </Nav.Link>
        </Nav>
        <Nav className='menu-right'>
          <Link className='menu-cta' to='/login'>
            {" "}
            Sign In
          </Link>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
