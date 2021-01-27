import styled from 'styled-components';

export  const ContactWrapper = styled.div`
min-height: 50vh;
background-color: #1E272E;
padding-top: 5px;
padding-bottom: 5vh;


	@media screen and (max-width: 780px) {
		padding: 100px 0;
	}
`;

export const ContactContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
height: 100%;
padding: 10vh 0;
`;

export const ContactDetails = styled.div`
display: flex;
justify-content: center;
text-align: center;
`;

export const Social = styled.ul`
color: white;
text-decoration: none;
`;
export const SocialLinks = styled.li`
color: white;
list-style: none;
font-size: 36px;
padding: 60px 0;

&:hover{
	color: green;
	cursor: pointer;
}
`;



export const Title = styled.div`
display: flex;
justify-content: center;
color: white;
font-size: 48px;
`;



export const Form = styled.form`
	background: black;
	border-radius: 12px;
	// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	// display: grid;
	grid-column: 2;
	// height: auto;
	// margin: 0 auto;
	max-width: 400px;
	padding: 50px 50px;
	width: 100%;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const Label = styled.label`
	color: #d9d5b6;
	font-size: 24px;
	margin-bottom: 8px;
	margin-top: 8px;
`;

export const InputSelect = styled.select`
	border-radius: 4px;
	border: none;
	margin-bottom: 32px;
	padding: 16px 16px;
`;

export const FormButton = styled.button`
	color: #1f262e;
	border-radius: 4px;
	border: none;
	background: #white;
	cursor: pointer;
	font-size: 30px;
	padding: 16px 0;
	margin-top: 20px;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #646c79; // black coral 
		color: #e1e2e2; // platinum 
		outline: 5px solid #e1e2e2; // platinum 
	}
`;

export const InputTextArea = styled.textarea`
	width: 100%;
	resize: none;
	font-size: 24px;
`;