import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding-top: 14px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cusror: pointer;
  font-size: 40px;
  font-family: Trebuchet MS;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width:768px){
        display:block;
        postion:absolute;
        top:0,
        right:0;
        transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  align: items;
  list-style: none;
  text-align: center;
  margin-right: -100px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 25px;
  font-family: Trebuchet MS;
  &.active {
    border-bottom: 3px solid #fff;
  }
`;
export const NavLinksHash = styled(HashLink)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 25px;
  font-family: Trebuchet MS;
  &.active {
    border-bottom: 3px solid #fff;
  }
`;
export const NavItemContact = styled(LinkR)`
  background: #fff;
  border-radius: 36px 36px 36px 36px;
  width: 190px;
  height: 60px;
  margin: 12px 12px;
  padding: 18px;
  text-align: center;
  box-shadow: 0 2px 4px black;
`;
