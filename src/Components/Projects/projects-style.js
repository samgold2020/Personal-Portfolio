import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';


export const ProjectsWrapper = styled.div``;

export const ProjectsTitle = styled.p`
font-size: 56px;
display: flex;
justify-content: center;
`;

export const ProjectsLine = styled.div`
// display: flex;
// justify-content: center;
// border-left: 1px solid grey;
// position: absolute;
// left: 50%;
// height: 100px;
`;

export const ProjectsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
// background-color: #071328;
padding: 30px;



@media screen and (max-width: 1200px) {
  grid-template-columns: 250px 250px 250px;
  padding: 30px;

 }

//  @media screen and (max-width: 768px) {
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(2, 1fr);
//   column-gap: 20px;
//  }
`;

export const ProjectCard = styled.div`
text-align: center;
display: grid;
grid-template-rows: 280px 100px auto;
background-color: grey;
box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px 20px;


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
position: absolute;
padding: 175px 0px 0px;
font-size: 36px;
z-index: 1;

`;

export const ProjectDescription = styled.p``;


export const ProjectLink = styled(LinkS)`
font-size: 24px;
cursor: pointer;
`;