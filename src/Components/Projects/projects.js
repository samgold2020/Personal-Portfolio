import React from 'react';
import Flipcards from '../../Videos/Flipcards.png';
// import Steak from '../../images/Steak.png';
import CardFront from '../../images/red_card_front.svg';
import CardBack from '../../images/2_diamonds.svg';
import Restaurant from '../../images/restaurant.png';
import {
  ProjectsWrapper,
  ProjectsTitle,
  ProjectsContainer,
  ProjectsContent,
  ProjectCard,
  ProjectName,
  ProjectDescription,
  ProjectFramework,
  Img,
  ImgContainer,
  ProjectLink,
} from './projects-style';

const Projects = () => {

 
  return (
    <ProjectsWrapper>
      <ProjectsTitle className="projects"> My Work</ProjectsTitle>
    <ProjectsContainer>
      <ProjectsContent>
      <ProjectCard>
        <ProjectName>921Steak</ProjectName>
        <ImgContainer>
      <Img src={Restaurant}/>
      </ImgContainer>
        <ProjectDescription>Built using React, Djano and Python this fullstack restaurant website features a menu with full CRUD functinality, a login page with user authentifiction achieved through Django, and a dummy Opentable reservation widget for testing purposes. The design is mobile responsive, check it out!</ProjectDescription>
        <ProjectFramework></ProjectFramework>
        <ProjectLink 
        href='https://www.921steak.com/'
        target="_blank"
        area-label="921Steak">View the project</ProjectLink>
        <ProjectLink
                href='https://github.com/REST-a-site'
                target="_blank"
                area-label="921Steak">View the Github Repo
        </ProjectLink>
      </ProjectCard>

      <ProjectCard>
      <ProjectName>FLIPCARDS</ProjectName>
      <Img src={CardFront} alt="Card deck back"/>
      <Img src={CardBack} alt="Card deck two of diamonds"/>
        <ProjectDescription>Test your memory with this Vanilla Javascript game! Flipcards features a dark/light mode toggle, </ProjectDescription>
        <ProjectLink 
        href='https://samgold2020.github.io/Flipcards/level-one.html'
        target="_blank"
        area-label="Flipcards">View the Project</ProjectLink>
      </ProjectCard>

      <ProjectCard>
      <ProjectName>Recipes for Two</ProjectName>
      <Img src={Flipcards}/>
        <ProjectDescription>Test your memory with this fun Vanilla Javascipt game!  Built with CSS Grid and an animation exposing the card information on the back. MORE WORDS. </ProjectDescription>
        <ProjectLink to='https://samgold2020.github.io/Flipcards/level-one.html'>View the Project</ProjectLink>
      </ProjectCard>
      </ProjectsContent>
    </ProjectsContainer>
    </ProjectsWrapper>
  )
}

export default Projects;
