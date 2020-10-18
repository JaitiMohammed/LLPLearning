import React from "react";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLogo,
  NavMenu,
  NavLinks,
  NavItemContact,
  NavLinksHash,
} from "./NavbarComponents";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo style={{ textDecoration: "none" }} to='/home'>
            LLPLearing
          </NavLogo>
          <MobileIcon>{/* <FaBars /> */}</MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks style={{ textDecoration: "none" }} to='/home'>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksHash style={{ textDecoration: "none" }} to='/#about'>
                About
              </NavLinksHash>
            </NavItem>
            <NavItem>
              <NavLinks style={{ textDecoration: "none" }} to='/blog'>
                Blog
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks style={{ textDecoration: "none" }} to='/courses'>
                Courses
              </NavLinks>
            </NavItem>
            <NavItemContact>
              <NavLinks style={{ textDecoration: "none" }} to='/contact'>
                Contact us
              </NavLinks>
            </NavItemContact>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
