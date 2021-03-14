import React from 'react';
import './style.css';
import { Container, Form, Col, Card } from 'react-bootstrap';
import TextareaAutosize from 'react-autosize-textarea';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Schema for yup
const validationSchema = Yup.object().shape({
  fullname: Yup.string().trim().max(50, 'Too long!').required('Required'),
  email: Yup.string()
    .trim()
    .email('Invalid email address')
    .max(100, 'Too long!')
    .required('Required'),
  subject: Yup.string().trim().max(80, 'Too long!').required('Required'),
  message: Yup.string().trim().required('Required'),
});

const Contact = ({ className }) => {
  return (
    <section id='contact' className={className}>
      <Container className='contact__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-8 col-lg-offset-2'>
        <Card className='content__wrapper p-3' data-aos='fade-up'>
          <div data-aos='fade-up'>
            <h1 className='center'>Get in touch</h1>
            <p className='text-center pb-3' style={{ fontSize: '18px' }}>
              Whether you want to get in touch, talk about a project
              collaboration, or just say hi,
              <span className='d-block'>feel free to shoot me an email!</span>
            </p>
          </div>
          <Formik
            initialValues={{
              fullname: '',
              email: '',
              subject: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              setTimeout(() => {
                resetForm();
                setSubmitting(false);
              }, 500);
            }}
          >
            {(formik) => (
              <Form onSubmit={formik.handleSubmit}>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    md={5}
                    controlId='formGridFullname'
                    className='form__group'
                    data-aos='fade-up'
                  >
                    <Form.Control
                      required
                      type='text'
                      name='fullname'
                      placeholder='Enter Full Name'
                      className={
                        formik.touched.fullname && formik.errors.fullname
                          ? 'form__control error'
                          : 'form__control'
                      }
                      {...formik.getFieldProps('fullname')}
                    />
                    <Form.Label htmlFor='fullname' className='form__label'>
                      Name<span aria-hidden='true'></span>
                    </Form.Label>
                    {formik.touched.fullname && formik.errors.fullname ? (
                      <p className='error__message'>{formik.errors.fullname}</p>
                    ) : null}
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={5}
                    controlId='formGridEmail'
                    className='form__group ml-auto'
                    data-aos='fade-up'
                  >
                    <Form.Control
                      required
                      type='email'
                      name='email'
                      placeholder='Enter Email'
                      className={
                        formik.touched.email && formik.errors.email
                          ? 'form__control error'
                          : 'form__control'
                      }
                      {...formik.getFieldProps('email')}
                    />
                    <Form.Label htmlFor='email' className='form__label'>
                      Email<span aria-hidden='true'></span>
                    </Form.Label>
                    {formik.touched.email && formik.errors.email ? (
                      <p className='error__message'>{formik.errors.email}</p>
                    ) : null}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    md={12}
                    controlId='formGridSubject'
                    className='form__group'
                    data-aos='fade-up'
                  >
                    <Form.Control
                      required
                      type='text'
                      name='subject'
                      placeholder='Enter Subject'
                      className={
                        formik.touched.subject && formik.errors.subject
                          ? 'form__control error'
                          : 'form__control'
                      }
                      {...formik.getFieldProps('subject')}
                    />
                    <Form.Label
                      htmlFor='subject'
                      className='form__label subject__label__ref'
                    >
                      Subject<span aria-hidden='true'></span>
                    </Form.Label>
                    {formik.touched.subject && formik.errors.subject ? (
                      <p className='error__message'>{formik.errors.subject}</p>
                    ) : null}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    md={12}
                    controlId='formGridMessage'
                    className='form__group'
                    id='text__area'
                    data-aos='fade-up'
                  >
                    <TextareaAutosize
                      required
                      as='textarea'
                      rows={1}
                      type='text'
                      name='message'
                      placeholder='Write Message'
                      className={
                        formik.touched.message && formik.errors.message
                          ? 'form__control error textarea'
                          : 'form__control'
                      }
                      {...formik.getFieldProps('message')}
                    />
                    <Form.Label
                      htmlFor='message'
                      className='form__label textarea__label__ref'
                    >
                      Message<span aria-hidden='true'></span>
                    </Form.Label>
                    {formik.touched.message && formik.errors.message ? (
                      <p className='error__message textarea__error__msg'>
                        {formik.errors.message}
                      </p>
                    ) : null}
                  </Form.Group>
                </Form.Row>
                <div
                  className='d-flex justify-content-center col-md-4 col-sm-12 m-auto py-1'
                  data-aos='fade-up'
                  data-aos-anchor='#text__area'
                >
                  <button
                    className='send__btn btn'
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Send Message
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
