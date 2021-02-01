import styled from 'styled-components';

export const AboutWrapper =styled.div`
padding: 60px 200px;
min-height: 100vh;
`;

export const AboutContainer =styled.div`
display: grid;
grid-template-columns: 420px auto;
box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px 30px;
padding: 0px 40px;
border-radius: 10px;
//specify the transition on the element itself for it to occur in both directions
transition: all 0.9s ease-in-out;
position: relative;


&:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 1650px) {
  grid-template-columns: 320px auto;
}

@media screen and (max-width: 1150px) {
  grid-template-columns: 220px auto;
}
`;

export const AboutTitle = styled.p`
font-size: 48px;
grid-column: 1/3;
text-align: center;
`;

export const ImgWrapper = styled.div`
height: 300px;

`;

export const Img = styled.img`
border-radius: 55%;
width: 340px;
height: 400px;
padding: 30px;
position: absolute;
top: 0;
left: 0;

@media screen and (max-width: 1150px) {
  left: 0;
}
`;


export const Description = styled.p`
font-size: 36px;
grid-row: 2;
grid-column: 2;
`;


 export const DetailsWrapper = styled.div`
 display: flex;
 justify-content: center;
 padding-top: 60px;
 padding-bottom: 90px;

 `;

 export const DetailsContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(5, 450px);
 grid-column-gap: 80px;
 grid-gap: 40px;

 @media screen and (max-width: 1450px) {
  grid-template-columns: repeat(5, 350px);
  }

@media screen and (max-width: 1100px) {
  display: flex;
  flex-direction: column;
  width: 400px;

}
 `;

export const DetailOne= styled.div`
display: grid;
 text-align: center;
//  align-items: center;
 padding: 40px 0 0 40px;
 font-size: 24px;
 border-top: 6px solid #64cdcf; //teal
 border-radius: 6px;
 grid-column: 2;
 padding-right: 20px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
 transition: all 0.9s ease-in-out;

 &:hover {
  transform: scale(1.1);
  background-color: #1E272E; 
  border-top: none;
  color: white;
 `;

 export const CodewarsBadge = styled.img`
padding: 40px 0 20px 20px;

@media screen and (max-width: 1450px) {
  width: 280px;
}
 `;

 export const DetailTwo= styled.div`
 display: grid;
 text-align: center;
//  align-items: center;
 font-size: 24px;
 border-top: 6px solid #ca7d7f; //red
 border-radius: 6px;
//  grid-column: 2;
 padding-right: 20px;
 padding-top: 40px;
 padding-left: 20px;
//  padding-bottom: 40px;
//  padding: 40px 0 0 40px;

 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
 transition: all 0.9s ease-in-out;

 &:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-color: #1E272E;
  border-top: none;
  color: white;
 `;

 export const DetailThree= styled.div`
 display: grid;
 text-align: center;
 align-items: center;
 font-size: 24px;
 border-top: 6px solid #edad48; //orange
 border-radius: 6px;
//  grid-column: 3;
 padding-right: 20px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
 transition: all 0.9s ease-in-out;

 &:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-color: #1E272E;
  border-top: none;
  color: white;
 `;

 export const Button = styled.div`


 `;
 export const DetailFour= styled.div`
 display: grid;
 text-align: center;
 padding: 40px 0 0 40px;
 font-size: 24px;
 border-top: 6px solid #60a4da; //blue
 border-radius: 6px;
//  grid-column: 4;
 padding-right: 20px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
 transition: all 0.9s ease-in-out;

 &:hover {
  transform: scale(1.1);
  background-color: #1E272E;
  border-top: none;
  color: white;
 `;

 export const SocialLinks = styled.a`
font-size: 84px;
color: black;
display: flex;
align-self: flex-end;
padding 20px 0px;
`;
 export const DetailFive= styled.div``;
