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

export const NavContent = styled.ul`
text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  color: white;
  `;

export const NavLinks = styled.li`
font-size: 36px;
`;

// export const NavContent = styled.nav`

// // width: 100%;

// `;
// export const NavWrapper = styled.div`
// position: fixed;
// z-index: 10;
// top: 0;
// display: flex;
// justify-content: center;
// align-items: center;
// background-color: #000;
// height: 80px;
// // width: 100%;
// `;

// export const MobileIcon = styled.div`
// display: none;

// @media screen and (max-width: 768px) {
//   display: block;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transform: translate(-100%, 60%);
//   font-size: 1.8rem;
//   cursor: pointer;
//   color: #fff;
// }
// `;

// export const NavMenu = styled.div`
// // padding-left: 55px;
// // padding-right: 55px;
// // width: 100vw;


// @media screen and (max-width: 768px) {
//   display: none;
// }

// ;`


// export const NavLinks = styled(LinkS)`
// margin: 80px;
// font-size: 24px;
// color: white;
// cursor: pointer;


// @media screen and (max-width: 1100px) {
//   padding: 80px;

// }
// `;