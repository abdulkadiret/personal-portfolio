import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

const NotFoundPage = () => {
  return (
    <div id='page__notFound' variant='light'>
      <Container className='page__container'>
        <h1 className='display-1 font-weight-bolder'>404</h1>
        <p className='text-center text-muted'>
          Opps! sorry, but the page you were trying to view does not exist.
        </p>
        <Link className='go__to__home' to='/'>
          Go to Home
        </Link>
      </Container>
    </div>
  );
};
export default NotFoundPage;
