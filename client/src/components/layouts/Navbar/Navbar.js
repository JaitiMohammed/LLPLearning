import React, { useState } from "react";
import Logo from "../../../assets/OthersPictures/logo.png";
import "./Style.css";
import { Modal, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Login from "../../Login/index";

export const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header id='header'>
      <Navbar collapseOnSelect expand='lg' className='wrapper'>
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
            <Link className='menu-cta' onClick={handleShow}>
              {" "}
              Sign In
            </Link>{" "}
          </Nav>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign-In Now</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Login />
            </Modal.Body>
            <Modal.Footer>
              <p style={{ textAlign: "center" }}>
                You Don't have an account create it{" "}
                <Link to='/register'>here</Link>
              </p>
            </Modal.Footer>
          </Modal>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
