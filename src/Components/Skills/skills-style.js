import styled from 'styled-components';

export const SkillsWrapper = styled.div`
min-height: 50vh;
padding-bottom: 10vh;
`;

export const SkillsTitle = styled.p`
font-size: 56px;
display: flex;
justify-content: center;
color: #1E272E; //dark blue
`;

export const SkillsContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 780px) {
min-height: 50vh;
}
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

@media screen and (max-width: 580px) {

  grid-template-columns: repeat(3, 120px);
  grid-template-rows: repeat(4, 120px);
  justify-content: center;
  grid-gap: 10px;
}

`;

export const SkillsLogo = styled.div`
display: grid;
justify-content: center;
align-items: center;
font-size: 72px;
padding: 60px 60px;
background: grey;
border-radius: 15px;
color: #1E272E; //dark blue

@media screen and (max-width: 580px) {

  font-size: 42px;
  padding-top: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
}

&:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-position: right;
}
`;



