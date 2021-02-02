import styled from 'styled-components';

export const AboutWrapper =styled.div`
padding: 60px 200px;
min-height: 100vh;
`;

export const AboutTitle = styled.p`
font-size: 48px;
display: flex;
justify-content: center;
color: #1E272E; //dark blue
`;

export const DescriptionContainer = styled.div`
display: grid;
grid-template-columns: 140px auto;
// grid-template-rows: 130px auto;
box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
padding: 20px;

`;

export const Img = styled.img`
// border-radius: 15%;
width: 210px;
height: 270px;
position: relative;
padding-top: 20px;
padding-left: 20px;
z-index: 2;

@media screen and (max-width: 800px) {
  display: none;
}
`;

export const Description = styled.p`
font-size: 36px;
text-align: center;
grid-column: 2;
padding-left: 100px;
padding-right: 20px;
padding-top: 40px;
color: #1E272E; //dark blue
`;

 export const DetailsWrapper = styled.div`
 display: flex;
 justify-content: center;
 padding-top: 120px;
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
 text-align: right;
 #1E272E; //dark blue
 padding: 40px 0 0 40px;
 font-size: 24px;
 border-top: 8px solid #81A9B3; //teal
 border-radius: 6px;
 grid-column: 2;
 padding-right: 20px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);

 // Animation for color change blue
 background: linear-gradient(to right, white 50%, #81A9B3 50%) left;
 background-size: 200%;
 transition: .5s ease-out;

 &:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-position: right;
 `;

 export const CodewarsBadge = styled.img`
padding: 60px 20px 0px 5px;

@media screen and (max-width: 1450px) {
  width: 280px;
}
 `;

 export const DetailTwo= styled.div`
 display: grid;
 text-align: right;
 color: #1E272E; //dark blue
 font-size: 24px;
 border-top: 8px solid #FFC477; //red
 border-radius: 6px;
 padding-right: 20px;
 padding-left: 10px;
 padding-top: 40px;
 background-color: white;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);

  // Animation for color change yellow
  background: linear-gradient(to right, white 50%, #FFC477 50%) left;
  background-size: 200%;
  transition: .5s ease-out;

 &:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-position: right;

 `;

 export const DetailThree= styled.div`
 display: grid;
 text-align: right;
 color: #1E272E; //dark blue
 padding: 40px 0 0 40px;
 font-size: 24px;
 border-top: 8px solid #BB3420; //red
 border-radius: 6px;
 padding-right: 20px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);

 // Animation for color change red
  background: linear-gradient(to left, white 50%, #BB3420 50%) right;
  background-size: 200%;
  transition: .5s ease-out;

 &:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-position: left;
 `;

 export const SocialLinks = styled.a`
font-size: 84px;
color: black;
display: flex;
align-self: flex-end;
padding 20px 0px;
`;

