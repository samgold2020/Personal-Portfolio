import styled from 'styled-components';

export const ProjectsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
row-gap: 20px;



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

export const ProjectCard = styled.div`
text-align: center;
 width: 420px;
 height: 620px;
 background: blue;
 border-radius: 25px;
 justify-self: center;

 @media screen and (max-width: 768px) {
  width: 220px;
  height: 220px;
 }
`;