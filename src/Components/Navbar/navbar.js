import React from 'react'
import { FaBars } from 'react-icons/fa';
import {
 Nav,
 MobileIcon,
 NavMenu,
 NavLinks
} from './navbar-style';

const navbar = ({ toggle }) => {
  return (
    <Nav>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavLinks>Home</NavLinks>
            <NavLinks>About</NavLinks>
            <NavLinks>Projects</NavLinks>
            <NavLinks>Contact</NavLinks>
        </NavMenu>

    </Nav>
  )
}

export default navbar;
