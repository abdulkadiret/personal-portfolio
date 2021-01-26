import React, { useState } from 'react';
import './style.css';
import data from '../../assets/data/experianceData';
import { Container, ButtonGroup, Card } from 'react-bootstrap';
import DownloadIcon from '../../assets/images/download-icon.gif';

const Experience = ({ className }) => {
  const [myExperience, setMyExperience] = useState(1);

  return (
    <>
      <section id='experience' className={className}>
        <Container className='experience__content px-sm-5 col-lg-8 col-lg-offset-2'>
          <h1 className='center' data-aos='fade-up'>
            Experience
          </h1>
          <ButtonGroup
            className='text-center d-flex justify-content-center mb-2'
            size='md'
            role='group'
            data-aos='fade-up'
          >
            {data.map(({ id, title }) => (
              <button
                type='button'
                key={id}
                id={`${id}`}
                className='btn experience__btn'
                onClick={() => setMyExperience(id)}
              >
                <span>{title}</span>
              </button>
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
        <span>
          <a
            href='https://drive.google.com/file/d/1Dbc_yHM5JgPvxndbFLwm6wWiwz89Cp2s/view'
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
        </span>
      </div>
    </>
  );
};

const ExperienceDetail = ({ id }) => {
  const foundExperience = data.find((item) => item.id === Number(id));
  if (foundExperience) {
    return (
      <Card key={foundExperience.id} className='experience__wrapper'>
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
      </Card>
    );
  } else {
    return null;
  }
};

export default Experience;
