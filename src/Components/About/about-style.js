import styled from 'styled-components';

export const AboutContainer =styled.div`
display: grid;
grid-template-columns: 160px 1fr 1fr;
grid-template-rows: repeat(2, 1fr);
height: 590px;
width: 100%;
background-color: #071328;
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
export const Description = styled.p`
grid-row: 2;
grid-column: 2/4;
font-size: 36px;
color: white;

`;



