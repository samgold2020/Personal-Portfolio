import React, { useState } from 'react';
import {ProjectData} from './ProjectData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import '../../App.css';
import { SiJavascript, SiReact, SiDjango, SiPython, SiPostman, SiHtml5, SiCss3} from 'react-icons/si';

import {
  ComponentWrapper,
  ProjectsTitle,
  Slider,
  ArrowRight,
  ArrowLeft,
  Img,
  ProjectsContainer,
  ProjectsContent,
  ProjectName,
  SkillsContainer,
  Skills,
  ProjectDescription,
  LinksContainer,
  ProjectLinkOne,
  ProjectLinkTwo,
} from './projects-style';

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
          // console.log(Math.random())
          return(

            <ProjectsContainer key={index}>
            <div className={index === current ? 'slide-active' : 'slide'} key={index}>
              {index === current ? (

              <ProjectsContent
              data-aos="zoom-in"
              data-aos-duration="1500" 
              key={index}>
                <ProjectName key={slide.title}> {slide.title}</ProjectName>
                <Img key={slide.image} src={slide.image} alt="project images" />
                <ProjectDescription key={slide.description}>{slide.description}</ProjectDescription>

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
                    <Skills> <SiHtml5 /> </Skills>
                    <Skills> <SiCss3 /> </Skills>
                  </SkillsContainer> 
                  ) : slide.id === 3 ? (
                  <SkillsContainer>
                   <Skills> <SiReact /> </Skills>
                   <Skills> <SiJavascript /> </Skills>
                   <Skills> <SiDjango /> </Skills>
                   <Skills> <SiPython  /> </Skills>
                   <Skills> <SiPostman /> </Skills>
                 </SkillsContainer>
                  ) :  slide.id === 4 ? (
                    <SkillsContainer>
                      <Skills> <SiReact /> </Skills>
                      <Skills> <SiJavascript /> </Skills>
                      <Skills> <SiHtml5 /> </Skills>
                      <Skills> <SiCss3 /> </Skills>
                    </SkillsContainer>
                  ) : slide.id === 5 ? (
                    <SkillsContainer>
                      <Skills> <SiJavascript /> </Skills>
                      <Skills> <SiHtml5 /> </Skills>
                      <Skills> <SiCss3 /> </Skills>
                    </SkillsContainer>
                  ) : null } 
              </div>

                <LinksContainer>
                <ProjectLinkOne 
                key={slide.url}
                href={slide.url} 
                target='_blank'>
                  Visit Site</ProjectLinkOne>
                  
                <ProjectLinkTwo 
                key={slide.repo}
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
