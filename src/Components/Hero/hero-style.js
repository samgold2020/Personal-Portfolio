import styled from 'styled-components';

export const HeroWrapper = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;

`;


export const HeroContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
// height: 100%;
min-height: 100vh;
background-color: green;
`;


export const VideoContainer = styled.video`
// display: relative;
 width: 100%;
 height: 100vh;
 -o-object-fit: cover;
 object-fit: cover;
`;

export const HeroContent = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;

`;

export const HeroH1 = styled.h1`
color: white;
z-index: 99;
font-size: 72px;
background: rgba(0,0,0,0.5);
padding-right: 20px;
padding-left: 20px;

@media screen and (max-width: 1024px) {
  display: flex;
  justify-content: center;
  font-size: 48px;
}

@media screen and (max-width: 480px) {
  display: flex;
  justify-content: center;
  font-size: 24px;
}
`;

export const HeroP = styled.p`
color: white;
z-index: 3;
font-size: 36px;
background: rgba(0,0,0,0.6);
padding-right: 20px;
padding-left: 20px;

@media screen and (max-width: 1024px) {
  display: flex;
  justify-content: center;
  font-size: 24px;
}

@media screen and (max-width: 480px) {
  display: flex;
  justify-content: center;
  font-size: 18px;
}
`;