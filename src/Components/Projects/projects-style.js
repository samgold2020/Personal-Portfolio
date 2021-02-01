import styled from 'styled-components';

// Component 
export const ComponentWrapper = styled.div`
min-height: 100vh;
background-color: #1E272E; //dark blue
padding-top: 5px;
padding-bottom: 5vh;

`;
// Component title
export const ProjectsTitle = styled.p`
font-size: 56px;
display: flex;
justify-content: center;
color: white;
`;

export const Slider = styled.div`
position: relative;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const ArrowLeft = styled.div`
position: absolute;
top: 50%;
left: 32px;
font-size: 3rem;
color: white;
z-index: 10;
cursor: pointer;
//User-select here prevents highlighting on double-click
user-select: none;

`;

export const ArrowRight = styled.div`
position: absolute;
top: 50%;
right: 32px;
font-size: 3rem;
color: white;
z-index: 10;
cursor: pointer;
`;

export const Img = styled.img`
width: 1000px;
height: 600px;
border-radius: 10px;
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
//////////////////////////////////////////////


export const ProjectsContainer = styled.div`
display: flex;
justify-content: center;

`;


export const ProjectsContent = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-row-gap: 40px;


@media screen and (max-width: 1900px) {
  grid-template-columns: repeat(2, 600px);
  grid-template-rows: repeat(2, 1fr);
}

@media screen and (max-width: 1000px) {
  //hide sills and links?
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(2, 1fr);
}
@media screen and (max-width: 1100px) {
    

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
  
// export const Img = styled.img`
// width:120px;
// `;

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
border-radius: 10px;
padding: 10px 20px;
font-size: 24px;
cursor: pointer;
border: 1px solid black;
text-decoration: none;
color: black;
transition: all 0.4s ease-out;


&:hover {
  transition: all 0.6s ease-in;

  background: #1E272E; // black coral 
  color: white;
  font-size: 28;
  border: none;
  // color: #e1e2e2; // platinum 
  // outline: 5px solid #e1e2e2; // platinum 
}
`;







