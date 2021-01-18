import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';


export const ProjectsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
row-gap: 20px;
background: black;
padding: 30px;



@media screen and (max-width: 1600px) {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
 }

 @media screen and (max-width: 1200px) {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
 
 }

 @media screen and (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 20px;
 }
`;

// export const ProjectsContainerTitle = styled.p`
// color: white;
// font-size: 46px;
// padding: 10px 800px;
// `;
export const ProjectCard = styled.div`
text-align: center;
display: grid;
grid-template-rows: 80px 280px 100px auto;
background-color: white;

 width: 420px;
 height: 620px;
 border: solid white 2px;
 justify-self: center;

 @media screen and (max-width: 768px) {
  width: 220px;
  height: 220px;
 }

`;

export const Img = styled.img`
width: 100%;

`;

export const ProjectTitle = styled.h2`
font-size: 36px;

`;

export const ProjectDescription = styled.p``;


export const ProjectLink = styled(LinkS)`
font-size: 24px;
cursor: pointer;
`;