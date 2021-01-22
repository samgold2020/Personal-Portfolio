import React from 'react';
// import Linkedin from '../../images/Linkedin.png';
import Toby from '../../images/TobyKeith.jpeg';
import {
  AboutWrapper,
  AboutTitle,
  AboutContainer,
  Description,
  ImgWrapper,
  Img,
} from './about-style';

const About = () => {
  return (
    <AboutWrapper className="about">
      <AboutTitle>Hi, I'm Sam!</AboutTitle>
      <AboutContainer>
        <ImgWrapper>
        <Img src={Toby}></Img>
        </ImgWrapper>
          <Description>I am a fullstack software engineer with a passionate for building software that aims to improve the lives of others. As a lifelong student I am always hard at work gaining new skills and perfecting old ones.</Description>
          {/* <FunFacts>During my free time I enjoy walking my cat, Toby Keith, reading, and soaking in the sun(lamp) depending on the time of year.</FunFacts> */}
      </AboutContainer>
    </AboutWrapper>
  )
}

export default About;
