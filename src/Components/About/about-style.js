import styled from 'styled-components';

export const AboutContainer =styled.div`
display: grid;
grid-template-columns: 160px 1fr 1fr 1fr;
grid-template-rows: repeat(2, 1fr);
height: 590px;
width: 100%;
background: black;
`;

export const Img = styled.img`
grid-column: 1;
border-radius: 50%;
justify-self: center;
align-self: center;
`;

export const NameP = styled.p`
grid-column: 2;
color: white;
font-size: 60px;
justify-self: center;
align-self: center;

`;
export const DescriptionOne = styled.p`
grid-column: 3/5;
color: white;
border: 8px solid white;
`;

export const DescriptionTwo = styled.p`
grid-row: 2;
grid-column: 1/3;
border: 8px solid white;
color: white;
`;

export const DescriptionThree = styled.p`
grid-row: 2;
grid-column: 3/5;
border: 8px solid white;
color: white;

`;

