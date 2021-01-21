import React from 'react';
import Javascript from '../../images/javascript.png';
import Html from '../../images/HTML.png';
import CSS from '../../images/CSS.png';
import ReactImage from '../../images/React.png';
import MongoDB from '../../images/MongoDB.png';
import Django from '../../images/django.png';
import Python from '../../images/Python.png';
import mySQL from '../../images/mySQL.svg';
import NodeJS from '../../images/NodeJS.svg';
import SASS from '../../images/SASS.png';
import Github from '../../images/Github.png';
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
        <Img src={Html}>
          </Img>
          </SkillsLogo>
      <SkillsLogo>
        <Img src={CSS}>
          </Img>
          </SkillsLogo>
      <SkillsLogo>
      <Img src={Javascript}>
      </Img>
      </SkillsLogo>
      <SkillsLogo>
        <Img src={ReactImage}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={MongoDB}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={Django}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={Python}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={mySQL}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={Github}>
          </Img></SkillsLogo>
      <SkillsLogo>
        <Img src={NodeJS}>
          </Img></SkillsLogo>
      {/* <SkillsLogo>
        <Img src={SASS}>
          </Img></SkillsLogo> */}

          </SkillsList>

    </SkillsWrapper>
  )
}

export default Skills;
