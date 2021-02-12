import styled from 'styled-components';

export const AboutWrapper =styled.div`
padding: 60px 60px;
min-height: 100vh;
`;

export const AboutContainer = styled.div`
display: grid;
border-radius: 15px;
grid-template-columns: 350px auto;
box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
padding: 20px;

@media screen and (max-width: 1100px) {
  grid-template-columns: 250px auto;
}

@media screen and (max-width: 800px) {
  grid-template-columns:  auto;
  text-align: center;
}

`;

export const AboutPhoto = styled.div`
align-self: center;

`;

export const AboutDescription = styled.div``;
export const Description = styled.p`
font-size: 24px;
`;

export const AboutImg = styled.img`
width: 300px;
height: 400px;
border-radius: 15px;


@media screen and (max-width: 1100px) {
  width: 200px;
  height: 250px;
}
`;

export const LinksWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: row;

@media screen and (max-width: 800px) {

}
`;
export const LinksContainer = styled.div`
padding: 40px;

@media screen and (max-width: 800px) {
padding: 40px 20px;
}
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

 export const LinkedIn = styled.a`
font-size: 84px;
color: black;
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
text-align: center;
`;

export const ItemContainerTwo = styled.div`
text-align: center;
`;

export const DetailLinks = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding-top: 50px;
`;