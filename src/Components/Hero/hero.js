import React from 'react';
import Video from '../../Videos/video2.mp4';
import {
  HeroContainer,
  HeroBackground,
  VideoContainer,
  HeroContent,
  HeroH1,
  HeroP,

} from './hero-style';

const hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoContainer loop autoPlay>
        <source src={Video} type='video/mp4'/>
        </VideoContainer>
      </HeroBackground>
      <HeroContent>
        <HeroH1>Samantha Goldstein</HeroH1>
        <HeroP>Fullstack Software Engineer</HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default hero;
