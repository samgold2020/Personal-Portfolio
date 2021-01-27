import styled from 'styled-components';


export const ProjectsWrapper = styled.div`
min-height: 100vh;
background-color: #1E272E;
padding-top: 5px;
padding-bottom: 5vh;

`;

export const ProjectsTitle = styled.p`
font-size: 56px;
display: flex;
justify-content: center;
color: white;
`;

export const ProjectsContainer = styled.div`
display: flex;
justify-content: center;
// animation: 1s ease-out 0s 1 slideInFromLeft;


// @keyframes slideInFromLeft {
//   0% {
//     transform: translateX(-100%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// }
`;


export const ProjectsContent = styled.div`
display: grid;
grid-template-columns: repeat(3, 800px);
grid-template-rows: repeat(2, 1fr);
grid-row-gap: 40px;


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
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px 20px;
  
  
  width: 90%;
  height: 620px;
  border: solid white 3px;
  border-radius: 10px;
  justify-self: center;
  
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
  
  `;

export const ImgContainer = styled.div`
// background-color: white;
// display: grid;
// grid-column: 1/3;
// grid-row: 2;
display: flex;
justify-content: center;
`;
  
export const Img = styled.img`
grid-column: 1/3;

// grid-column: 1/2;

padding: 10px 10px;
  width: 20%;
`;

export const ProjectName = styled.h2`
grid-column: 1/3;
font-size: 36px;
color: white;
background-color: black;
padding: 10px 0px;
`;

export const ProjectDescription = styled.p`
font-size: 24px;
padding: 10px 30px;
font-weight: bold;
grid-row: 5;
grid-column: 1/3;
`;

export const SkillsContainer = styled.div`
grid-column: 1/3;
grid-row: 4;
align-self: center;
border: 1px solid black;
`;
export const Skills = styled.div`
font-size: 35px;
display: flex;
justify-content: space-around;
padding: 20px 0;
`;

export const LinksContainer = styled.div`
grid-row: 6;
align-self: center;


`;

export const ProjectLink = styled.a`
// grid-row: 6;
// align-items: center;

// // display: grid;
// // grid-column: 2;
// // grid-row: 6;
border-radius: 10px;
padding: 10px 20px;
font-size: 24px;
cursor: pointer;
border: 3px solid black;
// // background-color: white;
text-decoration: none;
color: black;

&:hover {
  background-color: grey;
}
`;







