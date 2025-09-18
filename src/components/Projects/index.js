import React from 'react';
import './style.css';
import { Container, Card } from 'react-bootstrap';
import data from '../../assets/data/projectData';
import { RxExternalLink } from 'react-icons/rx';
import { TbBrandGithub } from 'react-icons/tb';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Projects = ({ className }) => {
  return (
    <section id='projects' className={className}>
      <Container className='project__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-9 col-lg-offset-2'>
        <h1 className='center' data-aos='fade-up'>
          Projects
        </h1>

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
            <div className='projects__container' key={id}>
              <div
                className='row horizontal__card justify-content-md-center'
                data-aos='fade-up'
              >
                {/* Left Side */}
                <div className='col col-lg-7 card__left'>
                  <div className='img__container'>
                    <img
                      src={image}
                      alt={`Screenshot of ${title}`}
                      className='project__image'
                    />
                    <span className='project__title-overlay'>{title}</span>
                  </div>
                  <div className='links__panel position-absolute d-flex flex-column justify-content-between align-items-center'>
                    <OverlayTrigger
                      placement='left'
                      trigger={['hover', 'focus']}
                      overlay={<Tooltip className='right'>Live demo</Tooltip>}
                    >
                      <a
                        href={link}
                        target='_blank'
                        aria-label={`Live demo of ${title}`}
                        rel='noopener noreferrer'
                        className='live__app__link'
                      >
                        <RxExternalLink
                          className='live__app__icon'
                          aria-hidden='true'
                        />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement='left'
                      trigger={['hover', 'focus']}
                      overlay={<Tooltip className='right'>Source code</Tooltip>}
                    >
                      <a
                        href={sourceCode}
                        target='_blank'
                        aria-label={`Source code of ${title}`}
                        rel='noopener noreferrer'
                        className='source__code__link'
                      >
                        <TbBrandGithub
                          className='source__code__icon'
                          aria-hidden='true'
                        />
                      </a>
                    </OverlayTrigger>
                  </div>
                  <div className='row tech'>
                    <div className='inner__left'>
                      <ul className='technologies d-flex flex-wrap pl-0'>
                        {technologies.map((technology, index) => (
                          <li key={index} className='pr-2 mt-1'>
                            <span className='technology'>{technology}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className='col col-lg-5 col-sm-6 d-none d-lg-block'>
                  <Card className='card__right'>
                    <Card.Body className='right__card__body'>
                      <Card.Title className='right__card__title underline-title'>
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
      </Container>
    </section>
  );
};

export default Projects;
