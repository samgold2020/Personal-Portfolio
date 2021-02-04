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
border-radius: 15px;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: 1fr;
box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
padding: 20px 40px 100px 40px;
`;

export const Img = styled.img`
// border-radius: 15px;
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
grid-column: 2/8;
padding-left: 100px;
padding-right: 20px;
padding-top: 40px;
color: #1E272E; //dark blue
`;

export const DetailOne= styled.div`
 color: #1E272E; //dark blue
 border-top: 8px solid #81A9B3; //teal
 border-radius: 6px;
 width: 300px;
 height: 200px;

 // Animation for color change blue
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.2);
 background: linear-gradient(to right, white 50%, #81A9B3 50%) left;
 background-size: 200%;
 transition: .5s ease-out;

 &:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-position: right;
 `;

export const CodewarsBadge = styled.img`
 height: 40px;
 `;

export const DetailTwo= styled.div`
 color: #1E272E; //dark blue
 border-top: 8px solid #FFC477; //red
 border-radius: 6px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.2);
 width: 300px;
 height: 200px;

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
 color: #1E272E; //dark blue
 border-top: 8px solid #BB3420; //red
 border-radius: 6px;
 box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.2);
 width: 300px;
 height: 200px;

 // Animation for color change red
  background: linear-gradient(to right, white 50%, #BB3420 50%) left;
  background-size: 200%;
  transition: .5s ease-out;

 &:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-position: right;
 `;

 export const LinkedIn = styled.a`
font-size: 84px;
color: black;
// text-align: center;
// justify-content: center;
`;

export const Resume = styled.a`
// justify-content: center;
justify-content: center;
text-align: center;
cursor: pointer;
color: #1E272E; //dark blue
text-decoration: none;
background-color: #E1E2E2; //light grey
padding: 30px;
font-size: 24px;
border-radius: 15px;

&:hover {
  transition: all 0.6s ease-in;
  background: #1E272E; // black coral 
  color: white;
  font-size: 32;
}

`;


export const ItemContainerOne = styled.div`
grid-column: 2/4;
text-align: center;
padding-top: 30px;
`;
export const ItemContainerTwo = styled.div`
grid-column: 4/6;
text-align: center;
padding-top: 30px;

`;
export const ItemContainerThree = styled.div`
grid-column: 6/8;
text-align: center;
padding-top: 30px;

`;

export const DetailLinks = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding-top: 50px;
`;