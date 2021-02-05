import React from 'react';
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
	// const [name, setName] = useState();
	// const [email, setEmail] = useState();
	// const [subject, setSubject] = useState();
	// const [message, setMessage] = useState();

	return (
		<ContactWrapper>
			<ContactContainer className="contact">
						<Form
						name ='contact'
						action ='/'
						method = 'POST'
						data-aos='zoom-in'
						data-aos-duration='1000'
						>
							<input required type='hidden' name='form-name' value='contact' />
							<Title>Let's Talk!</Title>
							<Label htmlFor='name'>Name:</Label>
							<InputTextArea
								name='name'
								type='text'
								// id='name'
								// form='nameform'
								// onChange={(event) => setName(event.target.value)}
								// value={name}
							/>
							<Label htmlFor='email'>Email:</Label>
							<InputTextArea
								name='email'
								type='text'
								// id='email'
								// form='emailform'
								// onChange={(event) => setEmail(event.target.value)}
								// value={email}
							/>
							<Label htmlFor='subject'>Subject:</Label>
							<InputTextArea
								name='subject'
								type='text'
								// id='subject'
								// form='subjectform'
								// onChange={(event) => setSubject(event.target.value)}
								// value={subject}
							/>
							<Label htmlFor='message'>Message:</Label>
							<InputTextArea
								name='message'
								type='text'
								rows='5'
								// form='messageform'
								// onChange={(event) => setMessage(event.target.value)}
								// value={message}
							/>
							<FormButton>Submit</FormButton>
						</Form>
			</ContactContainer>
		</ContactWrapper>
	);
};

export default Contact;
