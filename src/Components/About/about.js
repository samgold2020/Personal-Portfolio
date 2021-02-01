import React from 'react';
import Toby from '../../images/TobyKeith.jpeg';
import { FaLinkedin, FaCodepen } from 'react-icons/fa';

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
  Button,
  DetailFour,


} from './about-style';

const data = {
  title: "Hi, I'm Sam",
  description: "I am a fullstack web developer based in Chicago, Il. I have a passion for building software that aims to improve the lives of others.",
  detailOne: "When I'm not at work I can be found reading, riding my biking around Chicago, or spending time with my cat, Toby Keith.",
  detailTwo: "I enjoy cracking the code on CodeWars:",
  detailThree:"Contact Me",
  detailFour: "I strive to make beautiful, functional, simple applications. Check out my CodePen to see some cool CSS!"
}

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
      <AboutTitle className="about">{data.title}</AboutTitle>
        <ImgWrapper>
        <Img src={Toby}/>
        </ImgWrapper>
        <Description>{data.description}</Description>
          
      </AboutContainer>
      <DetailsWrapper>
      <DetailsContainer>
        <DetailOne>{data.detailOne}
         <SocialLinks
          href='https://www.linkedin.com/in/sgoldstein312/'
          target='_blank'
          aria-label='LinkedIn'>
          <FaLinkedin />
          </SocialLinks>
          </DetailOne>

        <DetailTwo>{data.detailTwo}
          
        </DetailTwo>
        <DetailThree>
          <Button>{data.detailThree}</Button>
          </DetailThree>
        <DetailFour>{data.detailFour}
        <SocialLinks
          href='https://codepen.io/sjgold'
          target='_blank'
          aria-label='Codepen'>
          <FaCodepen/>
          </SocialLinks> 
        </DetailFour>

      </DetailsContainer>
     </DetailsWrapper>
    </AboutWrapper>
  )
}

export default About;

//As a lifelong student I am always hard at work gaining new skills and perfecting old ones.
