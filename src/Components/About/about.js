import React from 'react';
import Linkedin from '../../images/Linkedin.png';
import {
  AboutWrapper,
  AboutContainer,
  NameP,
  Description,
  Img,
} from './about-style';

const About = () => {
  return (
    <AboutWrapper className="about">
      <AboutContainer>
        <Img src='https://picsum.photos/125/'></Img>
          <NameP>Hi, I'm Sam. Nice to meet you!</NameP>
          <Description>I am a fullstack software engineer with a passionate for building software that aims to improve the lives of others. As a lifelong student I am always hard at work gaining new skills and perfecting old ones.</Description>
      </AboutContainer>
    </AboutWrapper>
  )
}

export default About;
