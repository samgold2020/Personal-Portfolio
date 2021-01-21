import styled from 'styled-components';

export const SkillsWrapper = styled.div`
min-height: 50vh;
`;

export const SkillsTitle = styled.p`
font-size: 56px;
display: flex;
justify-content: center;
`;

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 15em 15em;
  gap: 12px 0px;
  

@media screen and (max-width: 1600px) {

  grid-template-columns: repeat(4, 300px) ;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;

}
`;

export const SkillsLogo = styled.div`
display: grid;
justify-content: center;
align-items: center;

`;

export const Img = styled.img`
background-color: grey;
border-radius: 10px;
padding: 40px 50px;
width: 150px;
height: 150px;
`;
