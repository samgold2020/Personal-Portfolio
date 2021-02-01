import styled from 'styled-components';

// Component 
export const ComponentWrapper = styled.div`
min-height: 100vh;
background-color: #1E272E; //dark blue
padding-top: 5px;
// padding-bottom: 5vh;
`;

export const ProjectsContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
// height: 50vh;
// background-color: green;
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

// Component title
export const ProjectsTitle = styled.p`
padding-bottom: 50px;
font-size: 56px;
display: flex;
justify-content: center;
color: white;
`;

export const Slider = styled.div`
position: relative;
// height: 40vh;
display: flex;
justify-content: center;
// text-align: center;
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

// export const Img = styled.img`
// width: 1000px;
// height: 600px;
// border-radius: 10px;
// `;

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

`;
export const ProjectLinkOne = styled.a`
grid-column: 1;
color: black;
font-size: 28px;
text-decoration: none;
cursor: pointer;
background-color: grey;
border-radius: 15px;
// background-color: white;
padding: 20px;
transition: all 0.4s ease-out;
border: 8px solid white;


&:hover {
  transition: all 0.6s ease-in;
  
  background: #1E272E; // black coral 
  color: white;
  font-size: 32;
  border: 8px solid white;
  // color: #e1e2e2; // platinum 
  // outline: 5px solid #e1e2e2; // platinum 
  
  `;
  export const ProjectLinkTwo = styled.a`
  grid-column: 2;
  color: black;
  font-size: 28px;
  text-decoration: none;
  background-color: grey;
  border-radius: 15px;
  // background-color: white;
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
    display: flex;
    justify-content: center;
    font-size: 48px;
    color: black;
    // background-color: black;
    // padding: 10px 0px;
    `;
    
export const ProjectDescription = styled.p`
    font-size: 24px;
    padding: 10px 30px;
    // grid-row: 5;
    // grid-column: 1/3;
    `;

export const Img = styled.img`
width:420px;
border-radius: 15px;

@media screen and (max-width: 1000px) {
  width: 200px;
}
`;
//////////////////////////////////////////////


 
  
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
  transition: all 0.9s ease-in-out;

&:hover {
  transform: scale(1.1);

  


  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
  
  `;

// export const ImgContainer = styled.div`
// grid-column: 1/3;
// `;
  


export const SkillsContainer = styled.div`
// grid-column: 1/3;
// grid-row: 4;
// align-self: center;
// border: 1px solid black;
`;
export const Skills = styled.div`
font-size: 35px;
// display: flex;
// justify-content: space-around;
// padding: 20px 0;
`;

// export const LinksContainer = styled.div`
// grid-row: 6;
// align-self: center;
// `;

// export const ProjectLink = styled.a`
// border-radius: 10px;
// padding: 10px 20px;
// font-size: 24px;
// cursor: pointer;
// border: 1px solid black;
// text-decoration: none;
// color: black;
// transition: all 0.4s ease-out;


// &:hover {
//   transition: all 0.6s ease-in;

//   background: #1E272E; // black coral 
//   color: white;
//   font-size: 28;
//   border: none;
//   // color: #e1e2e2; // platinum 
//   // outline: 5px solid #e1e2e2; // platinum 
// }
// `;







