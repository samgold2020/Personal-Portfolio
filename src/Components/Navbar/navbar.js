import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    <NavContent>
      <NavLinks>Home</NavLinks>
      <NavLinks>About</NavLinks>
      <NavLinks>Projects</NavLinks>
      <NavLinks>Contact</NavLinks>
    </NavContent>
    </NavWrapper>
  )
}

export default Navbar;
