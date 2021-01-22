import React from 'react';
import Flipcards from '../../Videos/Flipcards.png';
import Steak from '../../images/Steak.png';
import {
  ProjectsWrapper,
  ProjectsTitle,
  ProjectsContainer,
  ProjectCard,
  ProjectContents,
  ProjectTitle,
  ProjectDescription,
  Img,
  ProjectLink,
} from './projects-style';

const Projects = () => {

 
  return (
    <ProjectsWrapper>
      <ProjectsTitle className="projects"> My Work</ProjectsTitle>
    <ProjectsContainer>
      <ProjectCard>
      <Img src={Steak}></Img>
      <ProjectContents>
        <ProjectTitle>921Steak</ProjectTitle>
        <ProjectDescription>Built using React, Djano and Python this fullstack restaurant website features a menu with full CRUD functinality, a login page with user authentifiction achieved through Django, and a dummy Opentable reservation widget for testing purposes. The design is mobile responsive, check it out!</ProjectDescription>
        </ProjectContents>
        <ProjectLink 
        href='https://www.921steak.com/'
        target="_blank"
        area-label="921Steak">View the project</ProjectLink>
      </ProjectCard>

      {/* <ProjectCard>
      <Img src={Flipcards}></Img>
      <ProjectContents>
      <ProjectTitle>FLIPCARDS</ProjectTitle>
        <ProjectDescription>Test your memory with this Vanilla Javascript game! Flipcards features a dark/light mode toggle, </ProjectDescription>
        </ProjectContents>
        <ProjectLink 
        href='https://samgold2020.github.io/Flipcards/level-one.html'
        target="_blank"
        area-label="Flipcards">View the Project</ProjectLink>
      </ProjectCard> */}

      {/* <ProjectCard>
      <Img src={Flipcards}></Img>
      <ProjectContents>
      <ProjectTitle>Recipes for Two</ProjectTitle>
        <ProjectDescription>Test your memory with this fun Vanilla Javascipt game!  Built with CSS Grid and an animation exposing the card information on the back. MORE WORDS. </ProjectDescription>
        </ProjectContents>
        <ProjectLink to='https://samgold2020.github.io/Flipcards/level-one.html'>View the Project</ProjectLink>
      </ProjectCard> */}
      
    </ProjectsContainer>
    </ProjectsWrapper>
  )
}

export default Projects;
