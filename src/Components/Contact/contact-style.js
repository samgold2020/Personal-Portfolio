import styled from 'styled-components';

export  const ContactWrapper = styled.div`
min-height: 50vh;
background-color: #1E272E;
padding-top: 1vh;
padding-bottom: 1vh;
padding-right: 10vh;
padding-left: 10vh;
`;

export const ContactContainer = styled.div`
display: flex;
justify-content: center;
height: 100%;
padding: 10vh 0;

@media screen and (max-width: 1400px) {
	grid-column: 1;
	justify-content: center;
	align-self: center;
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
	grid-column: 2;
	max-width: 800px;
	padding: 50px 50px;
	width: 100%;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const Label = styled.label`
	color: #fff;
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
	border-radius: 6px;
	border: none;
	background: #white;
	cursor: pointer;
	font-size: 30px;
	padding: 16px 10px;
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