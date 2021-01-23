import React from 'react';
import './style.css';
import { Container } from 'react-bootstrap';
import ProfilePicture from '../../assets/images/profile-picture.jpg';

const About = ({ className }) => {
  return (
    <section id='about' className={className}>
      <Container className='about__content px-sm-5 col-lg-8 col-lg-offset-2'>
        <h1 className='center'>about myself</h1>
        <picture className='avatar my-3'>
          <div className='image__cropper'>
            <img id='profile__picture' src={ProfilePicture} alt='avatar' />
          </div>
        </picture>
        <>
          <p className='personal__description'>
            I am a full stack web developer with previous experience as a public
            health professional. Having changed my career to software
            engineering with CodeYourFuture, I am now looking for a new
            opportunity to work on exciting digital products. I am eager to work
            in a positive, friendly and collaborative environment where I can
            both learn from talented colleagues and use my versatile skill set
            to help others grow and thrive. I am highly motivated, quick to
            learn new skills. I am open to new ideas and always excited to take
            on new challenges and tasks that help me further develop my skills.
          </p>
          <ul className='index__finger__emoji personal__description'>
            <li>
              I love coding, problem solving and working in collaboration with
              others &#x1F49C;
            </li>
            <li>
              I like applying my coding skills to develop something that has a
              positive impact on people's day to day life &#x1F44D;
            </li>
            <li>
              I also enjoy socialising with friends, playing and watching
              football, cooking and keeping myself active by taking a walk in
              green spaces while reconnecting with nature. &#x26BD;
            </li>
          </ul>
        </>
      </Container>
    </section>
  );
};

export default About;
