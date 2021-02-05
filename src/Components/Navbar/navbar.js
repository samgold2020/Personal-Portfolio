import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from "react-scroll";
import {
 NavWrapper,
 NavContainer,
 NavContent,
 MobileIcon,

} from './navbar-style';

const Navbar = ({ toggle }) => {
  return (
    <NavWrapper >
      <NavContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
    <NavContent>
    <Link className="NavLinks"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        > Home
          </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        > About
          </Link>
          <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        > Projects
          </Link>
          <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        > Skills
          </Link>
          <Link
        activeClass="active"
        to="reachme"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        > Contact
          </Link>
    </NavContent>
    </NavContainer>
    </NavWrapper>
  )
}

export default Navbar;
