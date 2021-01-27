import React, { useState } from 'react';
import { SiJavascript, SiReact,  SiDjango, SiPython, SiHtml5, SiCss3} from 'react-icons/si';

import {
  ProjectsWrapper,
  ProjectsTitle,
  ProjectsContainer,
  ProjectsContent,
  ProjectCard,
  ProjectName,
  SkillsContainer,
  Skills,
  ProjectDescription,
  Img,
  ImgContainer,
  LinksContainer,
  ProjectLink,
} from './projects-style';

const Projects = ({ project, setProject }) => {

 
  return (
    <ProjectsWrapper>
      <ProjectsTitle 
      className="projects"
      > My Work</ProjectsTitle>
    <ProjectsContainer
    // data-aos='fade-right'
    // data-aos-delay='300'
    >
      <ProjectsContent>
      <ProjectCard>
        <ProjectName>921Steak</ProjectName>
        <ImgContainer>






      {/* <Img src={Restaurant}/> */}
      </ImgContainer>
      <SkillsContainer>
        <Skills><SiReact/><SiJavascript/><SiDjango/><SiPython/><SiHtml5/><SiCss3/></Skills>
      </SkillsContainer>
        <ProjectDescription>A fullstack restaurant website complete with mobile response, admin login and dummy OpenTable reservation widget. </ProjectDescription>
        <LinksContainer>
        <ProjectLink 
        href='https://www.921steak.com/'
        target="_blank"
        area-label="921Steak">View the project</ProjectLink>
        </LinksContainer>

        <LinksContainer>
        <ProjectLink
                href='https://github.com/REST-a-site'
                target="_blank"
                area-label="921Steak">View the Github Repo
        </ProjectLink>
        </LinksContainer>

        
      </ProjectCard>

      <ProjectCard>
      <ProjectName>FLIPCARDS</ProjectName>
      {/* <Img 
      src={CardFront} 
      alt="Card deck back" 
      data-aos="flip-left"
      data-aos-delay='350'/>
      <Img 
      src={CardBack} 
      alt="Card deck two of diamonds"
      data-aos="flip-right"
      data-aos-delay='450'/> */}
      <SkillsContainer>
        <Skills><SiJavascript/><SiHtml5/><SiCss3/></Skills>
      </SkillsContainer>
        <ProjectDescription>Test your memory with this Vanilla Javascript game! Flipcards features a dark/light mode toggle, </ProjectDescription>
        {/* <ProjectLink 
        href='https://samgold2020.github.io/Flipcards/level-one.html'
        target="_blank"
        area-label="Flipcards">View the Project</ProjectLink> */}
      </ProjectCard>

      <ProjectCard>
      <ProjectName>Recipes for Two</ProjectName>
      {/* <Img src={Flipcards}/> */}
      <SkillsContainer>
        <Skills><SiReact/><SiJavascript/><SiHtml5/><SiCss3/></Skills>
      </SkillsContainer>
        <ProjectDescription>Test your memory with this fun Vanilla Javascipt game!  Built with CSS Grid and an animation exposing the card information on the back. MORE WORDS. </ProjectDescription>
        {/* <ProjectLink to='https://samgold2020.github.io/Flipcards/level-one.html'>View the Project</ProjectLink> */}
      </ProjectCard>

      <ProjectCard>
      <ProjectName>Recipes for Two</ProjectName>
      {/* <Img src={Flipcards}/> */}
        <ProjectDescription>Test your memory with this fun Vanilla Javascipt game!  Built with CSS Grid and an animation exposing the card information on the back. MORE WORDS. </ProjectDescription>
        {/* <ProjectLink to='https://samgold2020.github.io/Flipcards/level-one.html'>View the Project</ProjectLink> */}
      </ProjectCard>
      
      </ProjectsContent>
    </ProjectsContainer>
    </ProjectsWrapper>
  )
}

export default Projects;
