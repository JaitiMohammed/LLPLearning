import React from "react";
import Logo from "../../../assets/OthersPictures/logo.png";
import "./Style.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export const Menu = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light'>
      <Navbar.Brand>
        <Link to='/home'>
          <img src={Logo} alt='logo' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' bg='light'>
        <Nav className='mr-auto menu-left'>
          <Nav.Link>
            <Link to='/home' style={{ color: "black" }}>
              Home
            </Link>
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
            <Link to='/blog' style={{ color: "black" }}>
              Blog
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/courses' style={{ color: "black" }}>
              Courses
            </Link>
          </Nav.Link>
          <Nav.Link>
            <HashLink to='#contact-us' style={{ color: "black" }}>
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
