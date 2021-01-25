import React, { useState } from 'react';
import './style.css';
import { Container, Form, Col, Card } from 'react-bootstrap';

const Contact = ({ className }) => {
  const [userInputData, setUserInputData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const UpdatedUserInputData = {
      ...userInputData,
      [event.target.name]: event.target.value,
    };
    setUserInputData(UpdatedUserInputData);
  };

  const submit = () => {
    console.log(`Name = ${userInputData.fullname}`);
    console.log(`Email = ${userInputData.email}`);
    console.log(`Subject = ${userInputData.subject}`);
    console.log(`Message = ${userInputData.message}`);
  };

  return (
    <section id='contact' className={className}>
      <Container className='contact__content col-lg-8 col-lg-offset-2'>
        <Card className='content__wrapper p-3'>
          <div>
            <h1 className='contact'>Get in touch</h1>
            <p className='text-center  pb-3' style={{ fontSize: '18px' }}>
              Whether you want to get in touch, talk about a project
              collaboration, or just say hi,
              <span className='d-block'>feel free to shoot me an email!</span>
            </p>
          </div>
          <>
            <Form onSubmit={submit}>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={5}
                  controlId='formGridFullname'
                  className='form__group'
                >
                  <Form.Control
                    required
                    type='text'
                    name='fullname'
                    placeholder='Enter Full Name'
                    className='form__control'
                    value={userInputData.name}
                    onChange={handleChange}
                  />
                  <Form.Label htmlFor='fullname' className='form__label'>
                    Name<span aria-hidden='true'>*</span>
                  </Form.Label>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md={5}
                  controlId='formGridEmail'
                  className='form__group ml-auto'
                >
                  <Form.Control
                    required
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    className='form__control'
                    value={userInputData.email}
                    onChange={handleChange}
                  />
                  <Form.Label htmlFor='email' className='form__label'>
                    Email<span aria-hidden='true'>*</span>
                  </Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Group className='form__group'>
                <Form.Control
                  required
                  type='text'
                  name='subject'
                  placeholder='Enter Subject'
                  className='form__control'
                  value={userInputData.subject}
                  onChange={handleChange}
                />
                <Form.Label
                  htmlFor='subject'
                  className='form__label subject__label__ref'
                >
                  Subject<span aria-hidden='true'>*</span>
                </Form.Label>
              </Form.Group>
              <Form.Group className='form__group' id='text__area'>
                <Form.Control
                  as='textarea'
                  rows={2}
                  required
                  type='text'
                  name='message'
                  placeholder='Write Message'
                  className='form__control'
                  value={userInputData.message}
                  onChange={handleChange}
                />
                <Form.Label
                  htmlFor='message'
                  className='form__label textarea__label'
                >
                  Message<span aria-hidden='true'>*</span>
                </Form.Label>
              </Form.Group>
              <div className='d-flex justify-content-center col-md-4 col-sm-12 m-auto'>
                <button className='send__btn btn'>Send Message</button>
              </div>
            </Form>
          </>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
