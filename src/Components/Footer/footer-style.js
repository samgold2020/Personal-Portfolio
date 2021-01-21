import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const FooterWrapper = styled.div`
display: flex;
justify-content: center;
position: relative;

bottom: 0;
left: 0;

height: 80px;
align-items: center;
border-top: 2px solid black;

`;

export const FooterContainer = styled.div``;

export const FooterLinks = styled.ul`
display: flex;
justify-content: space-around;

`;


export const Button = styled.a`
 display: flex;
 text-decoration: none;
 border-radius: 50px;
 background ${({primary}) => (primary ? '#fff' : '#000000')};
 padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
 color ${({dark}) => (dark ? '#010606' : '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
 cursor: pointer;
 transition: all 0.2s ease-in-out;
margin-left: 80px;
margin-right: 80px;
 &:hover  {
  transition: all 0.2s ease-in-out;
  background ${({primary}) => (primary ? '#fff' :'#024662')};

 }
`;

export const ArrowForward = styled(MdArrowForward)`
 margin-left: 15px;
 font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
 margin-left: 8px;
 font-size: 20px;
`;