import React from 'react';
// import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";

import {
  FooterWrapper,
  FooterContainer,
  FooterLinks,
  Button,
  ArrowForward,
  ArrowRight,

} from './footer-style';

const footer = ({ onHover, hover }) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLinks>
        <Button 
          href='https://github.com/samgold2020'
          target="_blank"
          aria-label='Github'
          onMouseEnter={onHover} 
          onMouseLeave={onHover}> 
         Github  {hover ? <ArrowForward /> : <ArrowRight />} 
          </Button>
          <Button 
          href='https://www.linkedin.com/in/sgoldstein312/'
          target="_blank"
          aria-label='Linkedin'
          onMouseEnter={onHover} 
          onMouseLeave={onHover}> 
         Linkedin  {hover ? <ArrowForward /> : <ArrowRight />} 
          </Button>
    
        <Button>
        <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        > Top
          </Link>
          </Button>
          </FooterLinks>
          </FooterContainer>
    </FooterWrapper>
  )
}

export default footer;
