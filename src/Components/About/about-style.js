import styled from 'styled-components';

export const AboutWrapper =styled.div`
padding: 0 60px;
min-height: 100vh;
`;

export const AboutTitle = styled.p`
font-size: 68px;
display: flex;
justify-content: center;
`;

export const AboutContainer =styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
background-color: white;
box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px 30px;
padding: 20px 40px;

`;

export const ImgWrapper = styled.div`
display: grid;
justify-content:center;
`;

export const Img = styled.img`
justify-content: center;
grid-column: 1;
grid-row: 1;
border-radius: 15%;
width: 400px;
height: 500px;
padding: 40px;

`;


export const Description = styled.p`
display: grid;
grid-column: 2;
align-items: center;
font-size: 36px;

`;

// export const FunFacts = styled.p`
// font-size: 36px;
// grid-column: 1/4;


// `;


