import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
 NavWrapper,
 MobileIcon,
 NavMenu,
 NavLinks,
} from './navbar-style';

const Navbar = ({ toggle }) => {
  return (
    <NavWrapper>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLinks> <Link to=''>Home</Link></NavLinks>
          <NavLinks><Link to=''>Projects</Link></NavLinks>
          <NavLinks><Link to=''>About</Link></NavLinks>
          <NavLinks>Contact</NavLinks>
        </NavMenu>
    </NavWrapper>
  )
}

export default Navbar;
