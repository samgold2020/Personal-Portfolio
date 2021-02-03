import styled from 'styled-components';


export const FooterWrapper = styled.div`
display: flex;
justify-content: center;
`;

export const FooterContent = styled.ul`
text-decoration: none;
list-style-type: none;
display: flex;
justify-content: space-between;
align-items: center;
width: 1150px;
font-size: 38px;
border-top: 3px solid black;

@media screen and (max-width: 1600px) {
  width: 850px;
}

@media screen and (max-width: 1000px) {
  width: 550px;
}
`;

export const FooterLinks = styled.div`
padding-top: 20px;
color: #1E272E; //dark blue

&:hover {
  transform: scale(1.3);
  transition: all 0.6s ease-in-out;
  cursor: pointer;
`;

export const FooterTitle = styled.p`
font-size: 18px
`;





