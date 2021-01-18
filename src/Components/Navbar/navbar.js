import React from 'react'
import { FaBars, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
 Nav,
 MobileIcon,
 NavMenu,
 NavLinks,
} from './navbar-style';

const navbar = ({ toggle }) => {
  return (
    <Nav>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLinks> <Link to=''>Home</Link></NavLinks>
          <NavLinks><Link to=''>Projects</Link></NavLinks>
          <NavLinks><Link to=''>About</Link></NavLinks>
          <NavLinks>Contact</NavLinks>
          {/* <NavLinks><FaGithubSquare /></NavLinks>
          <NavLinks><FaLinkedin /></NavLinks> */}
        </NavMenu>
    </Nav>
  )
}

export default navbar;
