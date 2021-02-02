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
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [subject, setSubject] = useState();
	const [message, setMessage] = useState();

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
							<Label htmlFor='subject'>Subject:</Label>
							<InputTextArea
								type='text'
								rows='2'
								name='subject'
								id='subject'
								form='subjectform'
								onChange={(event) => setEmail(event.target.value)}
								value={subject}
							/>
							<Label htmlFor='message'>Message:</Label>
							<InputTextArea
								type='text'
								rows='5'
								name='message'
								id='message'
								form='messageform'
								onChange={(event) => setMessage(event.target.value)}
								value={message}
							/>
							<FormButton>Submit</FormButton>
						</Form>
			</ContactContainer>
		</ContactWrapper>
	);
};

export default Contact;
