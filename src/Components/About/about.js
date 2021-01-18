import React from 'react';
import {
  AboutContainer,
  NameP,
  DescriptionOne,
  DescriptionTwo,
  DescriptionThree,
  Img,
  Skills,
} from './about-style';

const about = () => {
  return (
    <AboutContainer>
      <Img src='https://picsum.photos/125/'></Img>
        <NameP>Sam Goldstein</NameP>
        <DescriptionOne>Gubergren lorem amet labore est amet aliquyam labore consetetur. Sed labore sit elitr duo, sed.hello</DescriptionOne>
        <DescriptionTwo>Gubergren lorem amet labore est amet aliquyam labore consetetur. Sed labore sit elitr duo, sed.hello</DescriptionTwo>
        <DescriptionThree>Gubergren lorem amet labore est amet aliquyam labore consetetur. Sed labore sit elitr duo, sed.hello</DescriptionThree>
        <Skills>SKILLS HERE</Skills>
    </AboutContainer>
  )
}

export default about;
