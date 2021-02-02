import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithubSquare, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { ImArrowUp } from 'react-icons/im';

import {
  FooterWrapper,
  FooterLinks,
  FooterContent,
  FooterTitle,
} from './footer-style';

const data = {
  footerTitle: "@ 2021 All Rights Reserved",

}

const footer = ({ onHover, hover }) => {
  return (
    <FooterWrapper>
        <FooterContent>

        <FooterLinks>
        <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        > <ImArrowUp />
          </Link> </FooterLinks>

        <FooterLinks> <FooterTitle>{data.footerTitle}</FooterTitle></FooterLinks>
        <FooterLinks
        href='https://codepen.io/sjgold'
        target='_blank'
        aria-label='Github'>  <FaCodepen />  </FooterLinks>
        <FooterLinks
        href='https://www.linkedin.com/in/sgoldstein312/'
        target='_blank'
        aria-label='LinkedIn'>   <FaLinkedin /> </FooterLinks>

        <FooterLinks
        href='https://github.com/samgold2020'
        target='_blank'
        aria-label='Github'>   <FaGithubSquare /> </FooterLinks>
        </FooterContent>
    </FooterWrapper>
  )
}

export default footer;
