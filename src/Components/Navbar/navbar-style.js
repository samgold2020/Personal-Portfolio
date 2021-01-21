import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavWrapper = styled.div`
display: flex;
justify-content: center;
position: absolute;
left: 60px;
top: 40px;
z-index: 1;
cursor: pointer;
color: white;
`;

export const NavContainer = styled.div``;
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  // position: absolute;
  top: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
}
`;

export const NavContent = styled.ul`
text-decoration: none;
list-style-type: none;
display: flex;
justify-content: space-between;
align-items: center;
width: 700px;
color: white;

@media screen and (max-width: 768px) {
  display: none;
}
  `;

export const NavLinks = styled.li``;

// Link > .active {
//   border-bottom: 1px solid #333;
// }