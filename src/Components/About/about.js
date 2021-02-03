import React from 'react';
import Toby from '../../images/TobyKeith.jpeg';
import { FaLinkedin, FaCodepen } from 'react-icons/fa';
import PersonalResume from '../../docs/Resume.pdf';

import {
  AboutWrapper,
  // AboutTitle,
  Description,
  DescriptionContainer,
  SocialLinks,
  Img,
  DetailsWrapper,
  DetailsContainer,
  DetailOne,
  DetailTwo,
  // CodewarsBadge,
  DetailThree,
  // ResumeWrapper,
  Resume,
} from './about-style';

const data = {
  title: "👋 Nice to meet you!",
  description: "I am a fullstack software engineer based in Chicago. I enjoy building object-oriented, responsive web applications that are easy to navigate and user friendly.",
  detailOne: "In my spare time I can be found reading, riding my biking around Chicago, playing piano, or hanging out with my cat, Toby Keith (pictured above).",
  detailTwo: "I also enjoy working to up my game on Codewars:",
  detailThree: "I strive to make beautiful, functional, simple applications. Check out my CodePen to see some cool CSS!",
  resume: "Resume",
}

const About = () => {
  return (
    <AboutWrapper>
      
        <DescriptionContainer>
          <Img className="about" src={Toby}/>
            {/* <AboutTitle className="about">{data.title}</AboutTitle> */}
          <Description> {data.description}</Description>
        </DescriptionContainer>
          
      <DetailsWrapper>
      <DetailsContainer
      data-aos="fade-down"
      >
        <DetailOne>{data.detailOne}
         <SocialLinks
         data-aos="fade-down"
         data-aos-duration="1500"
          href='https://www.linkedin.com/in/sgoldstein312/'
          target='_blank'
          aria-label='LinkedIn'>
          <FaLinkedin />
          </SocialLinks>
          </DetailOne>

        <DetailTwo>   
          <Resume 
          data-aos="fade-down"
          data-aos-duration="1500"
          href={PersonalResume} 
          target='_blank' 
          rel='noreferrer'> 
          {data.resume}</Resume>
        {/* <CodewarsBadge 
        data-aos="fade-down"
        data-aos-duration="1500"
        src='https://www.codewars.com/users/SamGold2020/badges/large'/> */}
        </DetailTwo>

        <DetailThree>{data.detailThree}
        <SocialLinks
        data-aos="fade-down"
        data-aos-duration="1500"
          href='https://codepen.io/sjgold'
          target='_blank'
          aria-label='Codepen'>
          <FaCodepen/>
          </SocialLinks> 
        </DetailThree>

      </DetailsContainer>
     </DetailsWrapper>

    {/* <ResumeWrapper>
     <Resume
     href={PersonalResume}
     target='_blank'
		 rel='noreferrer'> {data.resume}
    </Resume>
     </ResumeWrapper> */}

    </AboutWrapper>
  )
}

export default About;

