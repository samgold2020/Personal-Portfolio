import styled from 'styled-components';

export const AboutWrapper =styled.div`
padding: 60px 60px;
min-height: 50vh;
`;

export const AboutContainer =styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
background-color: white;
box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px 20px;
padding: 80px 80px;
// border: 9px solid green;

// height: 590px;
// width: 100%;
`;

export const Img = styled.img`
grid-column: 1;
border-radius: 50%;
width: 200px;
height: 200px;
align-self: center;
`;

export const NameP = styled.p`
// position: absolute
grid-column: 2/4;
font-size: 60px;
justify-content: beginning;
align-self: center;

`;
export const Description = styled.p`
grid-row: 2;
grid-column: 1/4;
font-size: 36px;

`;



