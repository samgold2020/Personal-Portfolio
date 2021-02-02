import React, { useState } from 'react';
import {ProjectData} from './ProjectData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import '../../App.css';
import { SiJavascript, SiReact, SiDjango, SiPython, SiPostman, SiHtml5, SiCss3, SiSlides} from 'react-icons/si';

import {
  ComponentWrapper,
  ProjectsTitle,
  Slider,
  ArrowRight,
  ArrowLeft,
  Img,
  ProjectsContainer,
  ProjectsContent,
  // ProjectCard,
  ProjectName,
  SkillsContainer,
  Skills,
  ProjectDescription,
  // Img,
  // ImgContainer,
  LinksContainer,
  ProjectLinkOne,
  ProjectLinkTwo,
  // Testing,
  // slide,
} from './projects-style';
import { render } from '@testing-library/react';



const Projects = ({ slides }) => {
 const [current, setCurrent] = useState(0);
 const length = slides.length

 //create a function for nextSlide onClick
 const nextSlide = () => {
   //Ternary for setting state, if it reaches the end set it back to zero, else i++
   setCurrent(current === length - 1 ? 0 : current + 1);
 };

 const prevSlide = () => {
   setCurrent(current === 0 ? length - 1 : current - 1);
 };

 //If there is no data or the data is not an array, return null
 if(!Array.isArray(slides) || slides.length <= 0){
   return null;
 }

 
 return (
   <ComponentWrapper>

      <ProjectsTitle className="projects"> My Work</ProjectsTitle>

      <Slider>
        <ArrowLeft onClick={prevSlide}> <FaArrowAltCircleLeft /> </ArrowLeft>
        <ArrowRight onClick={nextSlide}> <FaArrowAltCircleRight /> </ArrowRight>
        </Slider>

        {ProjectData.map((slide, index) => {
          return(

            <ProjectsContainer>
            <div className={index === current ? 'slide-active' : 'slide'} key={index}>
              {index === current ? (

              <ProjectsContent>
                <ProjectName>{slide.title}</ProjectName>
                <Img src={slide.image} alt="project images" />
                <ProjectDescription>{slide.description}</ProjectDescription>

                <div key={index} >
                {slide.id === 1 ? (
                 <SkillsContainer>
                   <Skills> <SiReact /> </Skills>
                   <Skills> <SiJavascript /> </Skills>
                   <Skills> <SiHtml5 /> </Skills>
                   <Skills> <SiCss3 /> </Skills>
                 </SkillsContainer>
            
                  ) : slide.id === 2 ? (
                  <SkillsContainer>
                   <Skills> <SiReact /> </Skills>
                   <Skills> <SiJavascript /> </Skills>
                   <Skills> <SiDjango /> </Skills>
                   <Skills> <SiPython  /> </Skills>
                   <Skills> <SiPostman /> </Skills>
                 </SkillsContainer>

                  ) :  slide.id === 3 ? (
                    <SkillsContainer>
                      <Skills> <SiReact /> </Skills>
                      <Skills> <SiJavascript /> </Skills>
                      <Skills> <SiHtml5 /> </Skills>
                      <Skills> <SiCss3 /> </Skills>
                    </SkillsContainer>
                  ) : slide.id === 4 ? (
                    <SkillsContainer>
                      <Skills> <SiJavascript /> </Skills>
                      <Skills> <SiHtml5 /> </Skills>
                      <Skills> <SiCss3 /> </Skills>
                    </SkillsContainer>
                  ) : null } 
              </div>

                <LinksContainer>
                <ProjectLinkOne 
                href={slide.url} 
                target='_blank'>
                  Visit Site</ProjectLinkOne>
                  
                <ProjectLinkTwo 
                href={slide.repo} 
                target='_blank'>
                  Github Repo</ProjectLinkTwo>

                </LinksContainer>
                </ProjectsContent>
                ): null }
                </div>
                </ProjectsContainer>
                )
              })}
    </ComponentWrapper>
  )
}

export default Projects;
