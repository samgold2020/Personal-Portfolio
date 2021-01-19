import React from 'react';
import Javascript from '../../images/javascript.png';
import Html from '../../images/HTML.png';
import CSS from '../../images/CSS.png';
import ReactImage from '../../images/React.png';
import MongoDB from '../../images/MongoDB.png';
import {
  SkillsWrapper,
  SkillsTitle,
  SkillsList,
  SkillsLogo,
  Img,

} from './skills-style'

const Skills = () => {
  return (
    <SkillsWrapper>
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsList>
      <SkillsLogo>
      <Img src={Javascript}></Img>
      </SkillsLogo>
      <SkillsLogo>
        <Img src={Html}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={CSS}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={ReactImage}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={MongoDB}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={Html}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={Html}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={Html}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={Html}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={Html}>
          </Img></SkillsLogo>
          </SkillsList>
    </SkillsWrapper>
  )
}

export default Skills;
