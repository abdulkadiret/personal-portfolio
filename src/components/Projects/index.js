import React from 'react';
import './style.css';
import { Container, Card } from 'react-bootstrap';
import data from '../../assets/data/projectData';
import LiveApp from '../../assets/images/external-link.svg';
import SourceCode from '../../assets/images/source-code.svg';

const Projects = ({ className }) => {
  return (
    <section id='projects' className={className}>
      <Container className='about__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-8 col-lg-offset-2'>
        <h1 className='title center' data-aos='fade-up'>
          Projects
        </h1>
        <div>
          {data.map(
            ({
              id,
              title,
              description,
              technologies,
              sourceCode,
              link,
              image,
            }) => (
              <div class='projects__container'>
                <div
                  key={id}
                  className='row horizontal__card justify-content-md-center'
                  data-aos='fade-up'
                >
                  <div className='col card__left col-md-7'>
                    <div className='img__container'>
                      <img
                        src={image}
                        alt='screenshot of the project'
                        className='position-relative'
                      />
                      <span>{title}</span>
                    </div>
                    <div>
                      <span>
                        <a
                          href={link}
                          target='_blank'
                          rel='noopener noreferrer'
                          class='live__app__link position-absolute'
                          style={{ top: 0, left: -15 }}
                        >
                          <img
                            src={LiveApp}
                            className='live__app__icon'
                            alt='demo of the project'
                            aria-hidden='true'
                          />
                        </a>
                      </span>
                      <span>
                        <a
                          href={sourceCode}
                          target='_blank'
                          rel='noopener noreferrer'
                          class='source__code__link position-absolute'
                          style={{ top: 50, left: -15 }}
                        >
                          <img
                            src={SourceCode}
                            className='source__code__icon'
                            alt='source code'
                            aria-hidden='true'
                          />
                        </a>
                      </span>
                    </div>
                    <div class='row tech'>
                      <div class='inner__left'>
                        <ul className='technologies d-flex flex-wrap pl-0'>
                          {technologies.map((technology, index) => (
                            <li key={index} className='pr-1 mt-1'>
                              <span className='technology'>{technology}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col col-md-5 col-sm-6 d-none d-md-block'>
                    <Card className='card__right'>
                      <Card.Body className='right__card__body'>
                        <Card.Title className='right__card__title'>
                          {title}
                        </Card.Title>
                        <Card.Text className='right__card__text project__description p-2'>
                          {description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
