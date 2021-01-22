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

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 15em 15em;
  gap: 12px 0px;
  

@media screen and (max-width: 1600px) {

  grid-template-columns: repeat(4, 300px) ;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;

}
@media screen and (max-width: 1200px) {

  grid-template-columns: repeat(3, 300px) ;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;

}

@media screen and (max-width: 900px) {

  grid-template-columns: repeat(4, 200px) ;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;

}

@media screen and (max-width: 768px) {

  grid-template-columns: repeat(3, 200px) ;
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
padding: 40px 60px;
width: 150px;
height: 150px;

@media screen and (max-width: 900px) {
  width: 90px;
  height: 90px;

}


@media screen and (max-width: 768px) {
  width: 70px;
  height: 70px;
}
`;
