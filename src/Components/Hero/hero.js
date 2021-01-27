import React from 'react';
import Video from '../../Videos/video2.mp4';
import {
  HeroWrapper,
  HeroContainer,
  HeroBackground,
  VideoContainer,
  HeroContent,
  HeroH1,
  HeroP,

} from './hero-style';

const Hero = () => {
  return (
    <HeroWrapper>
    <HeroContainer className="home">
      {/* <HeroBackground> */}
        <VideoContainer loop autoPlay>
        <source src={Video} type='video/mp4'/>
        </VideoContainer>
      <HeroContent>
        <HeroH1>Samantha Goldstein </HeroH1>
        <HeroP>Fullstack Software Engineer</HeroP>
      </HeroContent>
      {/* </HeroBackground> */}
    </HeroContainer>
    </HeroWrapper>
  )
}

export default Hero;
