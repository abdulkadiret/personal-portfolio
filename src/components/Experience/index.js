import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import data from '../../assets/data/experianceData';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import DownloadIcon from '../../assets/images/download-icon.gif';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Experience = ({ className }) => {
  const [myExperience, setMyExperience] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef(null);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const tolerance = 2; // adjust as needed for your layout

    setCanScrollLeft(scrollLeft > tolerance);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - tolerance);
  };

  const scroll = (scrollOffset) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({ left: scrollOffset, behavior: 'smooth' });

      // Delay to let the scroll finish
      setTimeout(() => {
        checkScroll();
      }, 300);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <>
      <section id='experience' className={className}>
        <Container className='experience__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-8 col-lg-offset-2'>
          <h1 className='center' data-aos='fade-up'>
            Experience
          </h1>

          <div className='scroll-wrapper' data-aos='fade-up'>
            {canScrollLeft && (
              <button
                className='scroll-btn left'
                onClick={() => scroll(-150)}
                aria-label='Scroll left'
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )}

            <ButtonGroup
              ref={scrollRef}
              className='button__group text-center d-flex'
              size='md'
              role='group'
              onMouseEnter={() =>
                scrollRef.current.classList.add('scroll-visible')
              }
              onMouseLeave={() =>
                scrollRef.current.classList.remove('scroll-visible')
              }
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

            {canScrollRight && (
              <button
                className='scroll-btn right'
                onClick={() => scroll(150)}
                aria-label='Scroll right'
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
          </div>

          <div className='col px-0' data-aos='fade-up'>
            <ExperienceDetail id={myExperience.toString()} />
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
  if (!foundExperience) return null;

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
                href={foundExperience.companyURL}
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
};

export default Experience;
