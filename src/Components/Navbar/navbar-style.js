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

// ONSCROLL
// position: fixed;
// top: 0;
  `;

export const NavLinks = styled.li`
font-size: 36px;
`;

// Link > .active {
//   border-bottom: 1px solid #333;
// }