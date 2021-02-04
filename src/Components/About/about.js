import React from 'react';
import Toby from '../../images/TobyKeith.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import PersonalResume from '../../docs/Resume.pdf';

import {
  AboutWrapper,
  // AboutTitle,
  Description,
  DescriptionContainer,
  ItemContainerOne,
  ItemContainerTwo,
  ItemContainerThree,
  LinkedIn,
  Img,
  DetailOne,
  DetailTwo,
  DetailLinks,
  CodewarsBadge,
  DetailThree,
  // ResumeWrapper,
  Resume,
} from './about-style';

const data = {
  title: "👋 Nice to meet you!",
  description: "I am a fullstack software engineer based in Chicago. I enjoy building object-oriented, responsive web applications that are easy to navigate and user friendly. In my spare time I can be found hanging out with my cat, Toby Keith (pictured left), playing piano, or biking around Chi-Town.",
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
          
          <ItemContainerThree>
          <DetailThree>
          <DetailLinks> 
          <CodewarsBadge 
        data-aos="fade-down"
        data-aos-duration="1500"
        src='https://www.codewars.com/users/SamGold2020/badges/micro'/>
        </DetailLinks> 
        </DetailThree>
          </ItemContainerThree>
          
      </DescriptionContainer>
    </AboutWrapper>
  )
}

export default About;

