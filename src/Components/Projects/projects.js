import React, { useState } from 'react';
import {ProjectData} from './ProjectData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { SiJavascript, SiReact,  SiDjango, SiPython, SiHtml5, SiCss3, SiSlides} from 'react-icons/si';
import Restaurant from '../../images/restaurant.png';
import CardFront from '../../images/red_card_front.svg';
import CardBack from '../../images/2_diamonds.svg';


import {
  ComponentWrapper,
  ProjectsTitle,
  Slider,
  ArrowRight,
  ArrowLeft,
  Img,
  ProjectsContainer,
  ProjectsContent,
  ProjectCard,
  ProjectName,
  SkillsContainer,
  Skills,
  ProjectDescription,
  // Img,
  ImgContainer,
  LinksContainer,
  ProjectLinkOne,
  ProjectLinkTwo,
  slide,
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

 console.log(ProjectData.id)
 
 return (
   <ComponentWrapper>
      <ProjectsTitle className="projects"> My Work</ProjectsTitle>
      <Slider>
        <ArrowLeft onClick={prevSlide}> <FaArrowAltCircleLeft /> </ArrowLeft>
        <ArrowRight onClick={nextSlide}> <FaArrowAltCircleRight /> </ArrowRight>
        </Slider>
        {ProjectData.map((slide, index) => {
          return(
            <ProjectsContainer
           >
              <ProjectsContent>
            <div className={index === current ? 'slide-active' : 'slide'} key={index}>
              {index === current && (
                <ProjectName>{slide.title}</ProjectName>
              )}
              {index === current && (
              <Img src={slide.image} alt="project images" />
              )}
              {/* <div> */}
              {index === current && (
                <ProjectDescription>{slide.description}</ProjectDescription>
              )}
              {/* </div> */}
              {/* <div>
                {slide.id === "sam" (
                  console.log("ONE")
                )}
              </div> */}
            <LinksContainer>
            {index === current && (
                <ProjectLinkOne href={slide.url} target='_blank'>Visit Site</ProjectLinkOne>
                
              )}

            {index === current && (
                <ProjectLinkTwo href={slide.repo} target='_blank'>Github Repo</ProjectLinkTwo>
                )}
            </LinksContainer>
            </div>
            </ProjectsContent>
            </ProjectsContainer>
            )
          })}
          {/* <div>
         { slides.id === 1 ? (
              <Skills><SiReact/><SiJavascript/><SiHtml5/><SiCss3/></Skills>
          )}
          </div> */}





    {/* <ProjectsContainer
    data-aos='fade-right'
    data-aos-delay='300'
    >

      <ProjectsContent>
      <ProjectCard>
      <ProjectName>Portfolio</ProjectName>
        <ImgContainer>
      <Img src={Restaurant}/>
      </ImgContainer>
      <SkillsContainer>
        <Skills><SiReact/><SiJavascript/><SiHtml5/><SiCss3/></Skills>
      </SkillsContainer>
        <ProjectDescription>Test your memory with this fun Vanilla Javascipt game!  Built with CSS Grid and an animation exposing the card information on the back. MORE WORDS. </ProjectDescription>
        <LinksContainer>

        </LinksContainer>

        <LinksContainer>
        <ProjectLink
                href='https://github.com/samgold2020/portfolio'
                target="_blank"
                area-label="Portfolio">View the Github Repo
        </ProjectLink>
        </LinksContainer>      
        </ProjectCard>




      <ProjectCard>
        <ProjectName>921Steak</ProjectName>
        <ImgContainer>
      <Img src={Restaurant}/>
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
      <ImgContainer>
      <Img 
      src={CardFront}
      alt="Card deck back" 
      data-aos="flip-left"
      data-aos-delay='350'/>
      <Img 
      src={CardBack} 
      alt="Card deck two of diamonds"
      data-aos="flip-right"
      data-aos-delay='450'/>
      </ImgContainer>
      <SkillsContainer>
        <Skills><SiJavascript/><SiHtml5/><SiCss3/></Skills>
      </SkillsContainer>
        <ProjectDescription>Test your memory with this Vanilla Javascript game! Flipcards features a dark/light mode toggle, </ProjectDescription>
        <LinksContainer>
        <ProjectLink 
        href='https://samgold2020.github.io/Flipcards/level-one.html'
        target="_blank"
        area-label="Flipcards">View the Project</ProjectLink>
        </LinksContainer>

        <LinksContainer>
        <ProjectLink
                href='https://github.com/samgold2020/Flipcards'
                target="_blank"
                area-label="921Steak">View the Github Repo
        </ProjectLink>
        </LinksContainer>
      </ProjectCard>

      <ProjectCard>
      <ProjectName>Meals for Two</ProjectName>
      {/* <Img src={Flipcards}/> */}
      {/* <SkillsContainer>
        <Skills><SiReact/><SiJavascript/><SiHtml5/><SiCss3/></Skills>
      </SkillsContainer>
        <ProjectDescription>Test your memory with this fun Vanilla Javascipt game!  Built with CSS Grid and an animation exposing the card information on the back. MORE WORDS. </ProjectDescription>
        <LinksContainer>
        <ProjectLink 
        href='https://github.com/samgold2020/MealsForYou'
        target="_blank"
        area-label="Flipcards">View the Project</ProjectLink>
        </LinksContainer>

        <LinksContainer>
        <ProjectLink
                href='https://github.com/samgold2020/MealsForYou'
                target="_blank"
                area-label="921Steak">View the Github Repo
        </ProjectLink>
        </LinksContainer>
      </ProjectCard> */}
      
      {/* </ProjectsContent>
    </ProjectsContainer> */} 
    </ComponentWrapper>
  )
}

export default Projects;
