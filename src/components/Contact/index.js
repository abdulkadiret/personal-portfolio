import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import { Container, Form, Col, Card } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { Formik } from 'formik';
import { LuSend } from 'react-icons/lu';
import * as Yup from 'yup';
import axios from 'axios';

//call configure method
toast.configure();

// Schema for yup
const validationSchema = Yup.object().shape({
  fullname: Yup.string().trim().max(30, 'Too long!').required('Required'),
  email: Yup.string()
    .trim()
    .email('Invalid email address')
    .max(30, 'Too long!')
    .required('Required'),
  subject: Yup.string().trim().max(70, 'Too long!').required('Required'),
  message: Yup.string().trim().required('Required'),
});

const Contact = ({ className }) => {
  return (
    <section id='contact' className={className}>
      <Container className='contact__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-8 col-lg-offset-2'>
        <Card className='content__wrapper p-5' data-aos='fade-up'>
          <div data-aos='fade-up'>
            <h1 className='center'>Get in touch</h1>
            <p className='text-center pb-3'>
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
              setTimeout(() => {
                axios
                  .post('/api/sendmail', {
                    fullname: values.fullname,
                    email: values.email,
                    subject: values.subject,
                    message: values.message,
                  })
                  .then((response) => {
                    toast.error(
                      'Whoops, sorry for the inconvenience! this section is under construction. It should be fixed quite soon. But in the meantime you can in touch with me using the other social links on the page.',
                      {
                        position: 'bottom-right',
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        className: 'toast__class',
                      }
                    );
                  })
                  .catch((error) => {
                    toast.error(
                      'Failed to send your message. Please try again later.',
                      {
                        position: 'bottom-right',
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        className: 'toast__class',
                      }
                    );
                  });
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
                    className='form__group'
                    data-aos='fade-up'
                  >
                    <Form.Control
                      required
                      type='text'
                      name='fullname'
                      id='fullname'
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
                    className='form__group ml-auto'
                    data-aos='fade-up'
                  >
                    <Form.Control
                      required
                      type='email'
                      name='email'
                      id='email'
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
                    className='form__group'
                    data-aos='fade-up'
                  >
                    <Form.Control
                      required
                      type='text'
                      name='subject'
                      id='subject'
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
                      id='message'
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
                  className='d-flex justify-content-center m-auto py-1'
                  data-aos='fade-up'
                  data-aos-anchor='#text__area'
                >
                  <button
                    type='submit'
                    className='send__btn btn btn-primary col-12 col-sm-6 col-lg-4 d-flex align-items-center justify-content-center'
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    {formik.isSubmitting ? (
                      <>
                        <span
                          className='spinner-border spinner-border-sm mr-2'
                          role='status'
                          aria-hidden='true'
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <LuSend className='h5 mb-0 mr-2' />
                        Send Message
                      </>
                    )}
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
