import styled from 'styled-components';


export const ProjectsWrapper = styled.div`
min-height: 100vh;
background-color: #1E272E;
padding-top: 1vh;
`;

export const ProjectsTitle = styled.p`
font-size: 56px;
display: flex;
justify-content: center;
color: white;

`;

export const ProjectsContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-gap: 10px;



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
  // grid-template-rows: 240px auto 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px 20px;
  
  
  width: 90%;
  height: 620px;
  border: solid white 6px;
  justify-self: center;
  
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
  
  `;
  
export const Img = styled.img`
  width: 20%;
  // height: 100%;

  
`;
  
export const  ProjectContents = styled.div`

`;


export const ProjectTitle = styled.h2`
font-size: 36px;


`;

export const ProjectDescription = styled.p`
font-size: 18px;
`;


export const ProjectLink = styled.a`
display: grid;
grid-row: 3;
align-self: center;
padding: 10px;
font-size: 24px;
cursor: pointer;
border: 3px solid rgb(30,39,46);
text-decoration: none;
color: black;
`;