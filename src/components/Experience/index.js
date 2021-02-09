import React, { useState } from 'react';
import './style.css';
import data from '../../assets/data/experianceData';
import { Container, ButtonGroup, Card, Button } from 'react-bootstrap';
import DownloadIcon from '../../assets/images/download-icon.gif';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Experience = ({ className }) => {
  const [myExperience, setMyExperience] = useState(1);

  return (
    <>
      <section id='experience' className={className}>
        <Container className='experience__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-8 col-lg-offset-2'>
          <h1 className='center' data-aos='fade-up'>
            Experience
          </h1>
          <ButtonGroup
            className='button__group text-center d-flex justify-content-center'
            size='md'
            role='group'
            data-aos='fade-up'
          >
            {data.map(({ id, title }) => (
              <Button
                type='button'
                key={id}
                id={`${id}`}
                active={id === myExperience}
                className='btn experience__btn'
                onClick={() => setMyExperience(id)}
              >
                <span>{title}</span>
              </Button>
            ))}
          </ButtonGroup>
          <div className='col px-0' data-aos='fade-up'>
            {myExperience === 1 && <ExperienceDetail id='1' />}
            {myExperience === 2 && <ExperienceDetail id='2' />}
            {myExperience === 3 && <ExperienceDetail id='3' />}
          </div>
        </Container>
      </section>
      <div className='banner d-flex justify-content-center align-items-center'>
        <a
          href='https://drive.google.com/file/d/1BsuZFuWce9dsfdkxsdzKedplYJ8TgNEt/view'
          target='_blank'
          rel='noopener noreferrer'
          className='cv__link__2 btn'
          data-aos='zoom-in-up'
        >
          CV
          <img
            className='download__icon__2'
            src={DownloadIcon}
            alt='download icon'
            aria-hidden='true'
          />
        </a>
      </div>
    </>
  );
};

const ExperienceDetail = ({ id }) => {
  const foundExperience = data.find((item) => item.id === Number(id));
  if (foundExperience) {
    return (
      <TransitionGroup key={foundExperience.id} className='experience__wrapper'>
        <CSSTransition
          key={foundExperience.id}
          appear={true}
          timeout={10000}
          classNames='fade'
        >
          <div>
            <h2 className='experience'>
              <span className='roles pr-1'>{foundExperience.title}</span>
              <span className='pr-1 at'>@</span>
              <span className='at'>
                <a
                  href='https://codeyourfuture.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='company__name'
                >
                  {foundExperience.company}
                </a>
              </span>
            </h2>
            <h3 className='date'>{foundExperience.date}</h3>
            <ul className='experiences__list'>
              {foundExperience.role.map((list, index) => (
                <li className='list__items' key={index}>
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  } else {
    return null;
  }
};

export default Experience;
