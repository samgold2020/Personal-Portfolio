import React from 'react';
import { MdArrowUpward } from 'react-icons/md';
// import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithubSquare, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { ImArrowUp } from 'react-icons/im';

import {
  FooterContainer,
  FooterWrapper,
  FooterDetails,
  FooterArrow,
  FooterLinks,
  FooterContent,
  FooterTitle,
  FooterEmail,
  FooterLinkedin,
  FooterGithub,


  FooterPadding,
  FooterContents,
  FooterLink,
 


} from './footer-style';

const data = {
  footerTitle: "@ 2021 All Rights Reserved",

}

const footer = ({ onHover, hover }) => {
  return (
    <FooterWrapper>
      <FooterContainer>
       
        {/* <FooterArrow> <ImArrowUp /> </FooterArrow> */}

        <FooterContent>
        <FooterLinks>   <ImArrowUp />   </FooterLinks>
        <FooterLinks> <FooterTitle>{data.footerTitle}</FooterTitle></FooterLinks>
        <FooterLinks>  <FaCodepen />  </FooterLinks>
        <FooterLinks
        href='https://www.linkedin.com/in/sgoldstein312/'
        target='_blank'
        aria-label='LinkedIn'>   <FaLinkedin /> </FooterLinks>

        <FooterLinks
        href='https://github.com/samgold2020'
        target='_blank'
        aria-label='Github'>   <FaGithubSquare /> </FooterLinks>
        </FooterContent>



      </FooterContainer>
      {/* <FooterPadding>
      <FooterContents>
        <FooterLink></FooterLink>
        <FooterLink></FooterLink>
        <FooterLink>
        <MdEmail />
        </FooterLink>
        <FooterLink>
        <FaGithubSquare />
        </FooterLink>
        <FooterLink>
        <FaLinkedin />
        </FooterLink>
      </FooterContents>
      </FooterPadding> */}
    </FooterWrapper>
  )
}

export default footer;
