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
          <Description>I am a fullstack software engineer with a passion for building software that aims to improve the lives of others. As a lifelong student I am always hard at work gaining new skills and perfecting old ones.</Description>
      </AboutContainer>
      <DetailsWrapper>
      <DetailsContainer>
        <DetailOne>Test</DetailOne>
        <DetailTwo>Test</DetailTwo>
        <DetailThree>Test</DetailThree>
        <DetailFour>Test</DetailFour>
        {/* <DetailFive>Test</DetailFive>
        <DetailSix>Test</DetailSix> */}
      </DetailsContainer>
     </DetailsWrapper>
    </AboutWrapper>
  )
}

export default About;
