import React, { useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import {
 NavWrapper,
 NavContainer,
 NavContent,
 MobileIcon,

} from './navbar-style';

const Navbar = ({ toggle }) => {
  // const [scrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 200 ){
  //     setScrolled(true)
  //   } else {
  //     setScrolled(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   let navbarClasses=['navbar'];
  // if(scrolled){
  //   navbarClasses.push('scrolled');
  // })


  return (
    <NavWrapper >
      <NavContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
    <NavContent className="home">
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
        to="contact"
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
