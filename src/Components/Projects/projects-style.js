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
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // grid-template-rows: 60px 1fr  1fr  1fr 60px  60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px 20px;
  
  
  width: 90%;
  height: 620px;
  border: solid white 3px;
  justify-self: center;
  
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
  
  `;

export const ImgContainer = styled.div`
background-color: white;

`;
  
export const Img = styled.img`
// padding-top: 50px;
// display: flex;
// justify-content: center;
padding: 10px 10px;
  width: 20%;
  // height: 100%;
`;

export const ProjectFramework = styled.div``;

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
// grid-column: 2,
// grid-row: 2/3;
`;


export const ProjectLink = styled.a`
// display: grid;
// grid-column: 2;
// grid-row: 6;
// align-self: center;
// align-self: end;
// display: flex;
// justify-content: space-around;
padding: 10px 20px;
font-size: 24px;
cursor: pointer;
border: 3px solid black;
background-color: white;
text-decoration: none;
color: black;
`;

export const H1 = styled.h1`
	font-size: 2.5rem;
	color: #e1e2e2;
	@media screen and (max-width: 780px) {
		margin-bottom: -10px;
	}
	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const Wrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;
	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
		padding-bottom: 100px;
		padding-top: 20px;
	}
	@media screen and (max-width: 780px) {
		grid-template-columns: 1fr;
		padding: 30px 20px;
	}
`;