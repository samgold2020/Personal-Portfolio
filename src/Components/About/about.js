import React from 'react';
import Toby from '../../images/TobyKeith.jpeg';
import { FaLinkedin, FaCodepen } from 'react-icons/fa';

import {
  AboutWrapper,
  AboutTitle,
  Description,
  DescriptionContainer,
  SocialLinks,
  Img,
  DetailsWrapper,
  DetailsContainer,
  DetailOne,
  DetailTwo,
  CodewarsBadge,
  DetailThree,
} from './about-style';

const data = {
  title: "Hi, I'm Sam",
  description: "I am a fullstack software engineer based in Chicago. I enjoy building object-oriented, responsive web applications that are easy to navigate and user friendly.",
  detailOne: "When I'm not at work I can be found reading, riding my biking around Chicago, or spending time with my cat, Toby Keith.",
  detailTwo: "I'm always trying to up my game on Codewars:",
  detailThree: "I strive to make beautiful, functional, simple applications. Check out my CodePen to see some cool CSS!"
}

const About = () => {
  return (
    <AboutWrapper>
      
        <DescriptionContainer>
          <Img src={Toby}/>
            <AboutTitle className="about">{data.title}</AboutTitle>
          <Description> {data.description}</Description>
        </DescriptionContainer>
          
      <DetailsWrapper>
      <DetailsContainer >
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

        <DetailThree>{data.detailThree}
        <SocialLinks
          href='https://codepen.io/sjgold'
          target='_blank'
          aria-label='Codepen'>
          <FaCodepen/>
          </SocialLinks> 
        </DetailThree>

      </DetailsContainer>
     </DetailsWrapper>
    </AboutWrapper>
  )
}

export default About;

