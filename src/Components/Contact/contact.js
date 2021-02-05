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

	return (
		<ContactWrapper>
			<ContactContainer className="contactme">
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
							/>
							<Label htmlFor='email'>Email:</Label>
							<InputTextArea
								name='email'
								type='text'
							/>
							<Label htmlFor='subject'>Subject:</Label>
							<InputTextArea
								name='subject'
								type='text'
							/>
							<Label htmlFor='message'>Message:</Label>
							<InputTextArea
								name='message'
								type='text'
								rows='5'
							/>
							<FormButton>Submit</FormButton>
						</Form>
			</ContactContainer>
		</ContactWrapper>
	);
};

export default Contact;
