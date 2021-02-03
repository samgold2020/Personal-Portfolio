import React from 'react';
import { FaNodeJs, FaGithubSquare } from 'react-icons/fa';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiPostman, SiPostgresql, SiPython, SiMongodb, SiAmazonaws} from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import {
  SkillsWrapper,
  SkillsTitle,
  SkillsContainer,
  SkillsList,
  SkillsLogo,
} from './skills-style'


//set icons to key value pairs object and map over /call 
const Skills = () => {
  return (
    <SkillsWrapper>
      <SkillsTitle className="skills">Skills </SkillsTitle>
      <SkillsContainer 
      // data-aos="zoom-in"
      >

      <SkillsList>
        <SkillsLogo> <SiJavascript/> </SkillsLogo>
        <SkillsLogo> <SiReact /> </SkillsLogo>
        <SkillsLogo> <SiHtml5 /> </SkillsLogo>
        <SkillsLogo> <SiCss3 /> </SkillsLogo>
        <SkillsLogo> <FaNodeJs /> </SkillsLogo>
        <SkillsLogo> <SiPostgresql /> </SkillsLogo>
        <SkillsLogo> <SiPython /> </SkillsLogo>
        <SkillsLogo> <DiDjango /> </SkillsLogo>
        <SkillsLogo> <SiMongodb /> </SkillsLogo>
        <SkillsLogo> <FaGithubSquare /> </SkillsLogo>
        <SkillsLogo> <SiPostman /> </SkillsLogo>
        <SkillsLogo> <SiAmazonaws /> </SkillsLogo>
      </SkillsList>
      </SkillsContainer>

    </SkillsWrapper>
  )
}

export default Skills;
