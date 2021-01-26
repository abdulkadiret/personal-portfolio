import React from 'react';
import './style.css';
import { Container } from 'react-bootstrap';
import ProfilePicture from '../../assets/images/profile-picture.jpg';
import data from '../../assets/data/skillData';

const About = ({ className, aboutSectionRef }) => {
  return (
    <section id='about' className={className} ref={aboutSectionRef}>
      <Container className='about__content px-sm-5 col-lg-8 col-lg-offset-2'>
        <h1 className='center' data-aos='fade-up'>
          about myself
        </h1>
        <picture className='avatar my-3' data-aos='fade-up'>
          <div className='image__cropper'>
            <img id='profile__picture' src={ProfilePicture} alt='avatar' />
          </div>
        </picture>
        <>
          <p className='personal__description' data-aos='fade-up'>
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
            <li data-aos='fade-up'>
              I love coding, problem solving and working in collaboration with
              others &#x1F49C;
            </li>
            <li data-aos='fade-up'>
              I like applying my coding skills to develop something that has a
              positive impact on people's day to day life &#x1F44D;
            </li>
            <li data-aos='fade-up'>
              I also enjoy socialising with friends, playing and watching
              football, cooking and keeping myself active by taking a walk in
              green spaces while reconnecting with nature. &#x26BD;
            </li>
          </ul>
        </>
        <div className='mt-5'>
          <h2 className='center' data-aos='fade-up'>
            Skills
          </h2>
          <Container>
            <div class='row justify-content-between'>
              {data.map(({ id, domainName, skills }) => (
                <ul
                  key={id}
                  className='skills__list d-flex flex-column align-items-center col-xl-2 col-lg-6 col-sm-12 ml-auto'
                >
                  <h3 className='domain align-self-center' data-aos='fade-up'>
                    {domainName}
                  </h3>
                  <div className='d-flex flex-column'>
                    {skills.map((skill, index) => (
                      <li key={index} className='ml-3 pl-2' data-aos='fade-up'>
                        {skill}
                      </li>
                    ))}
                  </div>
                </ul>
              ))}
            </div>
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default About;
