import styled from 'styled-components';

export const SkillsWrapper = styled.div`
min-height: 50vh;
padding-bottom: 10vh;

@media screen and (max-width: 780px) {
  padding: 10vh;
}
`;

export const SkillsTitle = styled.p`
font-size: 56px;
display: flex;
justify-content: center;
`;

export const SkillsContainer = styled.div`
display: flex;
justify-content: center;
`;

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  

@media screen and (max-width: 1600px) {

  grid-template-columns: repeat(4, 200px) ;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
}

@media screen and (max-width: 1100px) {

  grid-template-columns: repeat(3, 200px) ;
  grid-template-rows: repeat(4, 1fr);
  justify-content: center;
}


`;

export const SkillsLogo = styled.div`
display: grid;
justify-content: center;
align-items: center;
font-size: 58px;
padding: 60px 60px;
background: grey;
border-radius: 15px;

&:hover {
  transform: scale(1.1);
  transition: all 0.6s ease-in-out;
  cursor: pointer;

  

`;



