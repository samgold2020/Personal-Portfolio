import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';



export const FooterWrapper = styled.div`
bottom: 0;
right: 0;
width: 100vw;
height: 100px;
background-color: green;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
`;
export const Footer = styled.div``;
export const FooterLinks = styled.div``;


export const Button = styled(Link)`
 display: flex;
 width: 100px;
 align-items: center;
 text-decoration: none;
 border-radius: 50px;
 background ${({primary}) => (primary ? '#fff' : '#000000')};
 white-space: nowrap;
 padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
 color ${({dark}) => (dark ? '#010606' : '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;

 &:hover  {
  transition: all 0.2s ease-in-out;
  background ${({primary}) => (primary ? '#fff' :'#024662')};

 }
`;

export const ArrowForward = styled(MdArrowForward)`
 margin-left: 8px;
 font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
 margin-left: 8px;
 font-size: 20px;
`;