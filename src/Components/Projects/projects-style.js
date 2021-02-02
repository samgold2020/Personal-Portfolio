import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  min-height: 100vh;
  background-color: #1E272E; //dark blue
  padding-top: 5px;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ProjectsContent = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 900px;

@media screen and (max-width: 1400px) {
  width: 600px;
}

@media screen and (max-width: 1000px) {
  width: 450px;
}
`;

export const ProjectsTitle = styled.p`
  font-size: 56px;
  display: flex;
  justify-content: center;
  color: white;
`;

export const Slider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const ArrowLeft = styled.div`
  position: absolute;
  padding-top: 200px;
  left: 120px;
  font-size: 4rem;
  color: white;
  z-index: 3;
  cursor: pointer;
  //User-select here prevents highlighting on double-click
  user-select: none;


@media screen and (max-width: 800px) {
  left: 20px;
}
`;

export const ArrowRight = styled.div`
  position: absolute;
  padding-top: 200px;
  right: 120px;
  font-size: 4rem;
  color: white;
  z-index: 3;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    right: 30px;
  }
`;


export const slide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;

&:active {
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08)
}
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat (2, 1fr);
  justify-content: center;
  text-align: center;
  grid-gap: 20px;
  padding: 20px;
`;

export const ProjectLinkOne = styled.a`
  grid-column: 1;
  color: black;
  font-size: 28px;
  color: #1E272E; //dark blue
  text-decoration: none;
  cursor: pointer;
  background-color: #E1E2E2; //light grey
  border-radius: 15px;
  padding: 20px;
  transition: all 0.4s ease-out;
  border: 8px solid white;


&:hover {
  transition: all 0.6s ease-in;
  background: #1E272E; // black coral 
  color: white;
  font-size: 32;
  border: 8px solid white;
`;

export const ProjectLinkTwo = styled.a`
  grid-column: 2;
  color: black;
  font-size: 28px;
  color: #1E272E; //dark blue
  text-decoration: none;
  background-color: #E1E2E2; //light grey
  border-radius: 15px;
  padding: 20px;
  transition: all 0.4s ease-out;
  border: 8px solid white;
  
  &:hover {
    transition: all 0.6s ease-in;
    
  background: #1E272E; // black coral 
  color: white;
  font-size: 32;
  border: 8px solid white;
`;

export const ProjectName = styled.h2`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 48px;
  color: #1E272E; //dark blue
`;
    
export const ProjectDescription = styled.p`
  font-size: 24px;
  padding: 10px 30px;
  color: #1E272E; //dark blue
`;

export const Img = styled.img`
  width:420px;
  border-radius: 15px;

@media screen and (max-width: 1000px) {
  width: 200px;
}
`;

export const SkillsContainer = styled.div`
// color: white;
border-top: 2px solid black;
border-bottom: 2px solid black;
padding: 10px;
font-size: 48px;
display: flex;
justify-content: space-around;
`;

export const Skills = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
`;








