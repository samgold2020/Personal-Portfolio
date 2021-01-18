import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
position: relative;
display: flex;
justify-content: center;
align-items: center;
color: black;
background-color: black;
height: 80px;
// top: 0;
z-index: 2

`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
}
`;

export const NavMenu = styled.div`

@media screen and (max-width: 768px) {
  display: none;
}

;`


export const NavLinks = styled(LinkS)`
padding: 140px;
font-size: 24px;
color: white;
cursor: pointer;


@media screen and (max-width: 1100px) {
  padding: 80px;

}
`;