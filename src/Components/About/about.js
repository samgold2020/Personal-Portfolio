import React from 'react';
import Toby from '../../images/TobyKeith.jpeg';
import { FaLinkedin, FaCodepen } from 'react-icons/fa';

import {
  AboutWrapper,
  AboutTitle,
  AboutContainer,
  Description,
  SocialLinks,
  ImgWrapper,
  Img,
  DetailsWrapper,
  DetailsContainer,
  DetailOne,
  DetailTwo,
  CodewarsBadge,
  DetailThree,
  Button,
  DetailFour,


} from './about-style';

const data = {
  title: "Hi, I'm Sam",
  description: "I am a fullstack software engineer based in Chicago. I enjoy building object-oriented, responsive web applications that are easy to navigate and user friendly. Have a look around!",
  detailOne: "When I'm not at work I can be found reading, riding my biking around Chicago, or spending time with my cat, Toby Keith.",
  detailTwo: "I'm always trying to up my game on Codewars:",
  detailThree:"Contact Me",
  detailFour: "I strive to make beautiful, functional, simple applications. Check out my CodePen to see some cool CSS!"
}

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer
      data-aos='fade-right'
      data-aos-delay='250'>
      <AboutTitle className="about">{data.title}</AboutTitle>
        <ImgWrapper>
        <Img src={Toby}/>
        </ImgWrapper>
        <Description>{data.description}</Description>
          
      </AboutContainer>
      <DetailsWrapper>
      <DetailsContainer 
      data-aos='fade-left'
      data-aos-delay='400'>
        <DetailOne>{data.detailOne}
         <SocialLinks
          href='https://www.linkedin.com/in/sgoldstein312/'
          target='_blank'
          aria-label='LinkedIn'>
          <FaLinkedin />
          </SocialLinks>
          </DetailOne>

        <DetailTwo>{data.detailTwo}
        <CodewarsBadge src='https://www.codewars.com/users/SamGold2020/badges/large'/>
          
        </DetailTwo>
        {/* <DetailThree>
          <Button>{data.detailThree}</Button>
          </DetailThree> */}
        <DetailFour>{data.detailFour}
        <SocialLinks
          href='https://codepen.io/sjgold'
          target='_blank'
          aria-label='Codepen'>
          <FaCodepen/>
          </SocialLinks> 
        </DetailFour>

      </DetailsContainer>
     </DetailsWrapper>
    </AboutWrapper>
  )
}

export default About;

//As a lifelong student I am always hard at work gaining new skills and perfecting old ones.
