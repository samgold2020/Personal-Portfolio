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
position: absolute;
top: 10px;
background-color: rgb(0,0,0,0.3);
border-radius: 15px;
width: 650px;
z-index: 10;
cursor: pointer;
color: white;
animation: 1s ease-out 0s 1 slideInFromLeft;

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  transform: translate(-100%, 60%);
  font-size: 2.8rem;
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
width: 600px;
color: white;
font-size: 28px;



@media screen and (max-width: 768px) {
  display: none;
}
  `;

// export const Link = styled.li``;

