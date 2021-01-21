import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Row,
  ColumnOne,
  Form,
  Label,
  InputTextArea,
  FormButton,

} from './contact-style';

const Contact = () => {
	const [contact, setContact] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	return (
		<Container altBg={true} id='contact'>
			<Wrapper>
				<Row imgPosition={true}>
					<ColumnOne>
						<Form>
							<h1>Contact Me:</h1>
							<Label htmlFor='name'>Name:</Label>
							<InputTextArea
								type='text'
								rows='3'
								name='name'
								id='name'
								form='nameform'
								onChange={(event) => setName(event.target.value)}
								value={name}
							/>
							<Label htmlFor='email'>Email:</Label>
							<InputTextArea
								type='text'
								rows='3'
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
					</ColumnOne>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default Contact;
