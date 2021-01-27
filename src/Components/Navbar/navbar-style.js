import styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';

export const NavWrapper = styled.div`
position: sticky;
top: 0;
z-index: 10;
`;

export const NavContainer = styled.div`
display: flex;
justify-content: center;
position: absolute;
left: 60px;
top: 40px;
z-index: 1;
cursor: pointer;
color: white;
`;

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
width: 450px;
color: white;
font-size: 28px;



@media screen and (max-width: 768px) {
  display: none;
}
  `;

export const Link = styled.li``;

