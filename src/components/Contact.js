import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <Container>
        <Row>
            <Col>
                <h1>Contact Form</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="name">Name:</Form.Label>
                        <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="email">Email address:</Form.Label>
                        <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="message">Message:</Form.Label>
                        <Form.Control name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </Form.Group>

                    {errorMessage && (

                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                    )}

                    <Button type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default ContactForm;
