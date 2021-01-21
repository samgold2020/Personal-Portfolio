import styled from 'styled-components';

export  const ContactWrapper = styled.div`
	color: white;

	padding-top: 10vh;
	padding-bottom: 10vh;

	@media screen and (max-width: 780px) {
		padding: 100px 0;
	}
`;

export const ContactContainer = styled.div`

`;

export const Row = styled.div`

`;

export const ColumnOne = styled.div`
	// grid-area: col1;
	// margin-bottom: 15px;
	// padding: 0 15px;
`;

export const Title = styled.div`
display: flex;
justify-content: center;
font-size: 48px;
`;

export const ColumnTwo = styled.div`
	// grid-area: col2;
	// margin-bottom: 15px;
	// padding: 0 15px;
`;



export const Form = styled.form`
	background: black;
	border-radius: 12px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	display: grid;
	height: auto;
	margin: 0 auto;
	max-width: 400px;
	padding: 50px 50px;
	width: 100%;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const Label = styled.label`
	color: #d9d5b6;
	font-size: 14px;
	margin-bottom: 8px;
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
`;

export const InputTextArea = styled.textarea`
	width: 100%;
	resize: none;
`;