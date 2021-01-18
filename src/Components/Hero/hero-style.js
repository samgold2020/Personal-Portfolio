import styled from 'styled-components';

export const HeroContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
z-index: 1;


`;

export const HeroBackground = styled.div`
position: absolute;
 width: 100%;
 height: 100%;
 overflow: hidden;
`;

export const VideoContainer = styled.video`
display: relative;
 width: 100%;
 height: 100%;
 -o-object-fit: cover;
 object-fit: cover;
 z-index: 87;
 background: black 
`;

export const HeroContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroH1 = styled.h1`
color: white;
z-index: 3;
font-size: 72px;
background: rgba(0,0,0,0.5);
padding-right: 20px;
padding-left: 20px;
`;

export const HeroP = styled.p`
color: white;
z-index: 3;
font-size: 36px;
background: rgba(0,0,0,0.6);
padding-right: 20px;
padding-left: 20px;

`;