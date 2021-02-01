import React, { useState } from 'react';
import {
  ContactWrapper,
  ContactContainer,
	Form,
	Title,
  Label,
  InputTextArea,
  FormButton,

} from './contact-style';

const Contact = () => {
	const [contact, setContact] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	return (
		<ContactWrapper>
			<ContactContainer className="contact">
						<Form>
							<Title id='contact'>Let's Talk!</Title>
							<Label htmlFor='name'>Name:</Label>
							<InputTextArea
								type='text'
								rows='2'
								name='name'
								id='name'
								form='nameform'
								onChange={(event) => setName(event.target.value)}
								value={name}
							/>
							<Label htmlFor='email'>Email:</Label>
							<InputTextArea
								type='text'
								rows='2'
								name='email'
								id='email'
								form='emailform'
								onChange={(event) => setEmail(event.target.value)}
								value={email}
							/>
							<Label htmlFor='additionalDetails'>Inquiry:</Label>
							<InputTextArea
								type='text'
								rows='8'
								name='details'
								id='details'
								form='detailsform'
								onChange={(event) => setContact(event.target.value)}
								value={contact}
							/>
							<FormButton>Submit</FormButton>
						</Form>
			</ContactContainer>
		</ContactWrapper>
	);
};

export default Contact;
