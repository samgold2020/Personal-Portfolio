import React from 'react';
import Video from '../../Videos/video2.mp4';
import {
  HeroWrapper,
  HeroContainer,
  VideoContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from './hero-style';

const about = {
  title: 'Samantha Goldstein',
  subtitle: "Software Engineer",
}

const Hero = () => {
  return (
    <HeroWrapper>
    <HeroContainer className="home">
        <VideoContainer loop autoPlay>
        <source src={Video} type='video/mp4'/>
        </VideoContainer>
      <HeroContent>
        <HeroH1>{about.title}</HeroH1>
        <HeroP>{about.subtitle}</HeroP>
      </HeroContent>
    </HeroContainer>
    </HeroWrapper>
  )
}

export default Hero;
