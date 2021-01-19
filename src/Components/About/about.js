import React from 'react';
import {
  AboutWrapper,
  AboutContainer,
  NameP,
  Description,
  Img,
} from './about-style';

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <Img src='https://picsum.photos/125/'></Img>
          <NameP>Hi, I'm Sam. Nice to meet you!</NameP>
          <Description>I am a fullstack software engineer who is passionate about building software that aims to improve the lives of others. As a lifelong student I am always hard at work gaining new skills and perfecting old ones. My favorite TV show is the office and I have a cat named Toby Keith: Country Star.</Description>
      </AboutContainer>
    </AboutWrapper>
  )
}

export default About;
