import React from 'react';
import Flipcards from '../../Videos/Flipcards.png';
import {
  ProjectsContainer,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  Img,
  ProjectLink,
} from './projects-style';

const projects = () => {

 
  return (
    <ProjectsContainer>
      {/* <ProjectsContainerTitle>Projects:</ProjectsContainerTitle> */}
      <ProjectCard>
        <ProjectTitle>921Steak</ProjectTitle>
        <ProjectDescription>A fullstack restaurant website built using React, Django, and Python</ProjectDescription>
      </ProjectCard>

      <ProjectCard>
      <Img src={Flipcards}></Img>
      <ProjectTitle>FLIPCARDS</ProjectTitle>
        <ProjectDescription>Test your memory with this fun Vanilla Javascipt game!  Built with CSS Grid and an animation exposing the card information on the back. MORE WORDS. </ProjectDescription>
        <ProjectLink to='https://samgold2020.github.io/Flipcards/level-one.html'>Play FLIPCARDS</ProjectLink>
      </ProjectCard>

      <ProjectCard>
      <h1>Project Soon to Come</h1>
      </ProjectCard>
      <ProjectCard>

      <h1>Project Soon to Come</h1>
      </ProjectCard>
      
    </ProjectsContainer>
  )
}

export default projects;
