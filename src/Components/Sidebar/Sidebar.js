import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import { 
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarIcons,
} from './sidebar-style';

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home'>Home</SidebarLink>
          <SidebarLink to='about'>About</SidebarLink>
          <SidebarLink to='projects'>Projects</SidebarLink>
          <SidebarLink to='skills'>Skills</SidebarLink>
          <SidebarLink to='contact'>Contact</SidebarLink>
          <SidebarIcons>
            <FaGithubSquare size='50px' />
            <FaLinkedin size='50px'/>           
          </SidebarIcons>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
