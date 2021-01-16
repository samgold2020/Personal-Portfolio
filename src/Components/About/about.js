import React from 'react';
import {
  AboutContainer,
  NameP,
  DescriptionOne,
  DescriptionTwo,
  DescriptionThree,
  Img,
} from './about-style';

const about = () => {
  return (
    <AboutContainer>
      <Img src='https://picsum.photos/125/'></Img>
        <NameP>Sam Goldstein</NameP>
        <DescriptionOne>Gubergren lorem amet labore est amet aliquyam labore consetetur. Sed labore sit elitr duo, sed.hello</DescriptionOne>
        <DescriptionTwo>Gubergren lorem amet labore est amet aliquyam labore consetetur. Sed labore sit elitr duo, sed.hello</DescriptionTwo>
        <DescriptionThree>Gubergren lorem amet labore est amet aliquyam labore consetetur. Sed labore sit elitr duo, sed.hello</DescriptionThree>
    </AboutContainer>
  )
}

export default about;
