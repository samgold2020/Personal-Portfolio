import React from 'react';
import Toby from '../../images/TobyKeith.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import PersonalResume from '../../docs/Resume.pdf';

import {
  AboutWrapper,
  AboutContainer,
  AboutPhoto,
  AboutDescription,
  Description,
  AboutImg,
  LinksWrapper,
  LinksContainer,
  ItemContainerOne,
  ItemContainerTwo,
  LinkedIn,
  DetailOne,
  DetailTwo,
  DetailLinks,
  Resume,
} from './about-style';

const data = {
  aboutdetailsone: "Thanks for checking out my portfolio! I am a fullstack software engineer based in Chicago. I enjoy building object-oriented, responsive web applications that are easy to navigate and user friendly.",
  aboutdetailstwo: "I have 5 years of Account Management experience working for various start-ups in Chicago. Over the years I became frustrated that I couldn't pull custom reports from the database or solve product bugs without the help of engineers. It's at this point in 2019 I began my journey into the world of Software Engineering via an Intro to SQL course at General Assembly, and have been enamoured with the programers power to build, create, and solve ever since.",
  aboutdetailsthree: "In my spare time I can be found hanging out with my cat, Toby Keith (pictured left), playing piano, practicing Javascript and Python on Codewars, and biking around Chi-Town (only in the summer, of course).",
  // aboutdetailsthree: "I have a passion for collaboration, if you'd like to work together please fill out the form below or contact me on LinkedIn!",
  resume: "Resume",
}

const About = () => {
  return (
    <AboutWrapper>
        <AboutContainer className="about">
          <AboutPhoto>
            <AboutImg src={Toby} alt="cat photo"></AboutImg>
          </AboutPhoto>
          <AboutDescription>
            <Description>{data.aboutdetailsone}</Description>
            <Description>{data.aboutdetailstwo}</Description>
            <Description>{data.aboutdetailsthree}</Description>
    
          </AboutDescription>
  
          
      </AboutContainer>
      <LinksWrapper>
      <LinksContainer>
      <ItemContainerOne>
            <DetailOne>
              <DetailLinks>
         <LinkedIn
         data-aos="fade-down"
         data-aos-duration="1500"
         href='https://www.linkedin.com/in/sgoldstein312/'
         target='_blank'
         aria-label='LinkedIn'>
          <FaLinkedin />
          </LinkedIn>
          </DetailLinks>
          </DetailOne></ItemContainerOne>
      </LinksContainer>

      <LinksContainer>
      <ItemContainerTwo>
          <DetailTwo>  
            <DetailLinks>
          <Resume 
          data-aos="fade-down"
          data-aos-duration="1500"
          href={PersonalResume} 
          target='_blank' 
          rel='noreferrer'> 
          {data.resume}</Resume>
          </DetailLinks> 
          </DetailTwo>
          </ItemContainerTwo>
          </LinksContainer>
      </LinksWrapper>
    </AboutWrapper>
  )
}

export default About;

