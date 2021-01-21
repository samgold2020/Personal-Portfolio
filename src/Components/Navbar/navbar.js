import React from 'react'
import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import {
 NavWrapper,
 NavContent,
 NavLinks,
//  MobileIcon,
//  NavMenu,
//  NavLinks,
} from './navbar-style';

const Navbar = ({ toggle }) => {



  return (
    <NavWrapper>
    <NavContent class="home">
    <Link
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
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        > Contact
          </Link>
    </NavContent>
    </NavWrapper>
  )
}

export default Navbar;
