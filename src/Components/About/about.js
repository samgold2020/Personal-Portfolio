import React from 'react';
import Toby from '../../images/TobyKeith.jpeg';
import { FaGithubSquare, FaLinkedin, FaCodepen } from 'react-icons/fa';

import {
  AboutWrapper,
  AboutTitle,
  AboutContainer,
  Description,
  SocialLinks,
  ImgWrapper,
  Img,
  DetailsWrapper,
  DetailsContainer,
  DetailOne,
  DetailTwo,
  DetailThree,
  DetailFour,
  // DetailFive,
  // DetailSix,

} from './about-style';

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
      <AboutTitle className="about">Hi, I'm Sam!</AboutTitle>
        <ImgWrapper>
        <Img src={Toby}></Img>
        </ImgWrapper>
          <Description>I am a fullstack web developer based in Chicago, Il. I have a passion for building software that aims to improve the lives of others.<Description></Description>
          <SocialLinks
          href='https://www.linkedin.com/in/sgoldstein312/'
          target='_blank'
          aria-label='LinkedIn'>
          <FaLinkedin />
          </SocialLinks>

          <SocialLinks
          href='https://github.com/samgold2020'
          target='_blank'
          aria-label='Github'>
          <FaGithubSquare/>
          </SocialLinks>

          <SocialLinks
          href='https://codepen.io/sjgold'
          target='_blank'
          aria-label='Codepen'>
          <FaCodepen/>
          </SocialLinks>
          
          </Description>
      </AboutContainer>
      <DetailsWrapper>
      <DetailsContainer>
        <DetailOne>When I'm not at work I can be found reading, biking across Chicago, or spending time with my cat, Toby Keith. </DetailOne>
        <DetailTwo>I enjoy cracking the code on CodeWars:</DetailTwo>
        <DetailThree>Resume</DetailThree>
        <DetailFour>I strive to make beautiful, functional, simple applications. Check out my CodePen to see some cool CSS!</DetailFour>
        {/* <DetailFive>Test</DetailFive>
        <DetailSix>Test</DetailSix> */}
      </DetailsContainer>
     </DetailsWrapper>
    </AboutWrapper>
  )
}

export default About;

//As a lifelong student I am always hard at work gaining new skills and perfecting old ones.
