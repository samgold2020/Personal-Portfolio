import React from 'react';
import {
  AboutContainer,
  NameP,
  Description,
  Img,
  SkillsContainer,
  Skills,
  SkillsOne,
  SkillsTwo,
  SkillsThree,
  SkillsFour,
} from './about-style';

const about = () => {
  return (
    <AboutContainer>
      <Img src='https://picsum.photos/125/'></Img>
        <NameP>Hi, I'm Sam. Nice to meet you!</NameP>
        <Description>I am a fullstack software engineer who is passionate about building software that aims to improve the lives of others. As a lifelong student I am always hard at work gaining new skills and perfecting old ones.</Description>
        <SkillsContainer>
          <Skills>
          <SkillsOne>One</SkillsOne>
          <SkillsTwo>Two</SkillsTwo>
          <SkillsThree>Three</SkillsThree>
          <SkillsFour>Four</SkillsFour>
          </Skills>
        </SkillsContainer>
    </AboutContainer>
  )
}

export default about;
