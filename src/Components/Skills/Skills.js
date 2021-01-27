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
import AWS from '../../images/AWS.png';
import Github from '../../images/Github.png';
import {
  SkillsWrapper,
  SkillsTitle,
  SkillsContainer,
  SkillsList,
  SkillsLogo,
  Img,

} from './skills-style'

const Skills = () => {
  return (
    <SkillsWrapper>
      <SkillsTitle className="skills">My Skills</SkillsTitle>
      <SkillsContainer>
      <SkillsList>
      <SkillsLogo>
        <Img src={Html}/>
          </SkillsLogo>
      <SkillsLogo>
        <Img src={CSS}/>
          </SkillsLogo>
      <SkillsLogo>
      <Img src={Javascript}/>
      </SkillsLogo>
      <SkillsLogo>
        <Img src={ReactImage}/>
      </SkillsLogo>
      <SkillsLogo>
        <Img src={MongoDB}/>
          </SkillsLogo>
      <SkillsLogo>
        <Img src={Django}/>
          </SkillsLogo>
      <SkillsLogo>
        <Img src={Python}/>
          </SkillsLogo>
      <SkillsLogo>
        <Img src={mySQL}/>
          </SkillsLogo>
      <SkillsLogo>
        <Img src={Github}/>
          </SkillsLogo>
      <SkillsLogo>
        <Img src={NodeJS}/>
          </SkillsLogo>
      <SkillsLogo>
        <Img src={AWS}/>
          </SkillsLogo>

          </SkillsList>
          </SkillsContainer>

    </SkillsWrapper>
  )
}

export default Skills;
