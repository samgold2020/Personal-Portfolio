import { FaBlackberry } from 'react-icons/fa';
import styled from 'styled-components';


export const FooterWrapper = styled.div`
display: flex;
justify-content: center;
// position: absolute;
`;
export const FooterContainer = styled.div`
// display: flex;
// justify-content: center;


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
`;

export const FooterLinks = styled.a`
padding-top: 20px;
cursor: pointer;
color: black;


`;

export const FooterTitle = styled.p`
font-size: 18px
`;

export const FooterArrow = styled.div`

`;




export const FooterEmail = styled.div``;
export const FooterLinkedin = styled.div``;
export const FooterGithub = styled.div``;


// export const FooterWrapper = styled.div`
// height: 100px;
// // background-color: blue;
// padding-top: 20px;
// `;

// export const FooterPadding = styled.div`

// `;

// export const FooterContents = styled.div`
// display: grid;
// grid-template-columns: repeat(6, 1fr);
// grid-tempate-rows: 1fr;
// `;

// export const FooterArrow = styled.div`
// grid-column: 1;
// font-size: 36px;
// padding-left: 100px;
// `;

// export const FooterLink = styled.div`
// justify-self: center;
// align-items: center;
// font-size: 39px
// `;

// export const Button = styled.a`
//  display: flex;
//  text-decoration: none;
//  border-radius: 20px;
//  background ${({primary}) => (primary ? '#fff' : '#000000')};
//  padding: 15px;
// //  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
//  color ${({dark}) => (dark ? '#010606' : '#fff')};
// //  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
//  cursor: pointer;
//  transition: all 0.2s ease-in-out;
// margin-left: 80px;
// margin-right: 80px;

//  &:hover  {
//   transition: all 0.5s ease-in-out;
//   background ${({primary}) => (primary ? '#fff' :'#024662')};

//  }
// `;