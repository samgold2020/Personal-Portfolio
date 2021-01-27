import styled from 'styled-components';

export const AboutWrapper =styled.div`
padding: 60px 200px;
min-height: 100vh;
`;

export const AboutTitle = styled.p`
font-size: 48px;
display: flex;
justify-content: center;
`;

export const AboutContainer =styled.div`
display: grid;
grid-template-columns: 620px auto;
box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px 30px;
padding: 10px 40px;
border-radius: 10px;
//specify the transition on the element itself for it to occur in both directions
transition: all 0.9s ease-in-out;


&:hover {
  transform: scale(1.1);
  cursor: pointer;
  color: #1E272E;

`;


export const ImgWrapper = styled.div`
display: grid;
justify-content: center;
`;

export const Img = styled.img`
justify-content: center;
grid-column: 1;
grid-row: 1;
border-radius: 55%;
width: 400px;
height: 500px;
padding: 40px;

`;


export const Description = styled.p`
display: grid;
grid-column: 2/3;
align-items: center;
font-size: 36px;
`;



 export const DetailsWrapper = styled.div`
 display: flex;
 justify-content: center;
 padding-top: 50px;
 padding-bottom: 90px;
 `;
 export const DetailsContainer = styled.div`
 display: grid;
 grid-template-rows: repeat(4, 105px);
 grid-template-columns: repeat(3, 450px);
 grid-column-gap: 80px;
 grid-row-gap: 30px;
 `;
 export const DetailOne= styled.div`
 display: grid;
 border-top: 4px solid #64cdcf;
 border-radius: 6px;
 grid-row: 2/4;
 padding-right: 20px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
 transition: all 0.9s ease-in-out;


 &:hover {
  transform: scale(1.1);
  cursor: pointer;
  color: #1E272E;
 `;
 export const DetailTwo= styled.div`
 display: grid;
 border-top: 4px solid #ca7d7f;
 border-radius: 6px;
 grid-column: 2;
 grid-row: 1/3;
 padding-right: 20px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
 `;
 export const DetailThree= styled.div`
 display: grid;
 border-top: 4px solid #edad48;
 border-radius: 6px;
 grid-column: 2;
 grid-row: 3/5;
 padding-right: 20px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
 `;
 export const DetailFour= styled.div`
 display: grid;
 border-top: 4px solid #60a4da;
 border-radius: 6px;
 grid-column: 3;
 grid-row: 2/4;
 padding-right: 20px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
 `;
 export const DetailFive= styled.div``;
 export const DetailSix= styled.div``;