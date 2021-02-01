import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
 display: grid;
 align-items: center;
 position: fixed;
 z-index: 20;
 width: 100%;
 height: 100%;
 background-color: rgb(0,0,0);
 top: 0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
 top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
 
`;
//Opacity is for the sidebar, creating a ternary for if isOpen=True show at 100% otherwise show at 0
//Might want to change top to right to come from the right? will need to updaate ternary

export const CloseIcon = styled(FaTimes)`
 color: #fff;
`;

export const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
//  background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
`;

export const SidebarWrapper = styled.div`
 color: #fff;
`;

export const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(3, 120px);
 text-align: center;

 @media screen and (max-width: 480px) {
   grid-template-rows: repeat(3, 120px);
 }
`;

export const SidebarLink = styled(LinkS)`
 display: flex;
 align-item: center;
 justify-content: center;
 font-size: 36px;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 color: #fff;
 cursor: pointer:

 &:hover {
   color: #01bf71;
   transition: 0.2s ease-in-out;
 }
`;

export const SidebarIcons = styled.li`
list-style: none;
display: flex;
justify-content: space-around;

`;

