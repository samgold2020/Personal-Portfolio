import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import {
  FooterWrapper,
  FooterLinks,
  Button,
  ArrowForward,
  ArrowRight,

} from './footer-style';

const footer = ({ onHover, hover }) => {
  return (
    <FooterWrapper>
        <FooterLinks>
        <Button 
          href='https://github.com/samgold2020'
          aria-label='Github'
          onMouseEnter={onHover} 
          onMouseLeave={onHover}>
          <FaGithubSquare /> Github {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          {/* <NavLinks><FaLinkedin /></NavLinks> */}
        </FooterLinks>
      
    </FooterWrapper>
  )
}

export default footer;
