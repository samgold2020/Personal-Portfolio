import styled from 'styled-components';


export const ProjectsWrapper = styled.div`
// min-height: 100vh;
background-color: #1E272E;
padding-top: 1vh;
padding-bottom: 5vh;
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 60px 1fr  1fr  1fr 60px  60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px 20px;
  
  
  width: 90%;
  height: 620px;
  border: solid white 1px;
  justify-self: center;
  
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
  
  `;
  
export const Img = styled.img`
padding-top: 50px;
grid-column: 1;
grid-row: 2/4;
  width: 100%;
  // height: 100%;
`;

export const ProjectFramework = styled.div``;

export const ProjectName = styled.h2`
grid-column: 1/3;
font-size: 36px;
`;

export const ProjectDescription = styled.p`
font-size: 18px;
padding-top: 60px;
grid-column: 2,
grid-row: 2/3;
`;


export const ProjectLink = styled.a`
display: grid;
grid-column: 2;
grid-row: 6;
align-self: center;
align-self: end;
padding: 10px;
font-size: 24px;
cursor: pointer;
border: 3px solid black;
background-color: white;
text-decoration: none;
color: black;
`;

export const GithubRepo = styled.a`

`;