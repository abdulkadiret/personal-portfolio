import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import data from '../../assets/data/experianceData';
import CV from '../../assets/CV.pdf';
import { Container } from 'react-bootstrap';
import DownloadIcon from '../../assets/images/download-icon.gif';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight  } from 'react-icons/md';

const Experience = ({ className }) => {
  const [myExperience, setMyExperience] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef(null);
  const activeTabRef = useRef(null);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const tolerance = 2;

    setCanScrollLeft(scrollLeft > tolerance);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - tolerance);
  };

  const handleTabNavigation = (direction) => {
    const currentIndex = data.findIndex((item) => item.id === myExperience);

    const nextIndex = currentIndex + direction;

    if (nextIndex < 0 || nextIndex >= data.length) return;

    setMyExperience(data[nextIndex].id);
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

  useEffect(() => {
    const container = scrollRef.current;
    const activeTab = activeTabRef.current;

    if (!container || !activeTab) return;

    const containerRect = container.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();

    const offset =
      tabRect.left -
      containerRect.left -
      container.clientWidth / 2 +
      tabRect.width / 2;

    container.scrollTo({
      left: container.scrollLeft + offset,
      behavior: 'smooth',
    });
  }, [myExperience]);

  return (
    <section>
      <div id='experience' className={`${className} pb-5`}>
        <Container className='experience__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-9 col-lg-offset-2'>
          <h1 className='center' data-aos='fade-up'>
            Experience
          </h1>

          <div
            className='nav-tabs-scroll-container d-flex align-items-center position-relative'
            data-aos='fade-up'
          >
            {/* Left Scroll Button */}
            {canScrollLeft && (
              <button
                type='button'
                className='scroll-btn left'
                onClick={() => handleTabNavigation(-1)}
                aria-label='Previous experience'
              >
                <MdKeyboardArrowLeft
                  className='slider-icon left'
                  aria-hidden='true'
                />
              </button>
            )}

            {/* Scrollable Tabs */}
            <div className='nav-tabs-wrapper' ref={scrollRef}>
              <ul
                className='nav nav-tabs flex-nowrap border-bottom-0'
                id='experienceTabs'
              >
                {data.map(({ id, title }) => (
                  <li className='nav-item' key={id}>
                    <button
                      ref={myExperience === id ? activeTabRef : null}
                      className={`nav-link rounded-0 pb-1 pt-2 m-1 ${
                        myExperience === id ? 'active' : ''
                      }`}
                      onClick={() => setMyExperience(id)}
                    >
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Scroll Button */}
            {canScrollRight && (
              <button
                type='button'
                className='scroll-btn right'
                onClick={() => handleTabNavigation(1)}
                aria-label='Next experience'
              >
                <MdKeyboardArrowRight
                  className='slider-icon right'
                  aria-hidden='true'
                />
              </button>
            )}
          </div>

          <ExperienceDetail id={myExperience.toString()} />
        </Container>
      </div>

      <div className='banner d-flex justify-content-center align-items-center'>
        <div className='cv__box'>
          <a
            href={CV}
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
      </div>
    </section>
  );
};

const ExperienceDetail = ({ id }) => {
  const foundExperience = data.find((item) => item.id === Number(id));
  if (!foundExperience) return null;

  return (
    <TransitionGroup
      key={foundExperience.id}
      className='experience__wrapper'
      data-aos='fade-up'
    >
      <span className="corner corner__top__left"></span>
      <span className="corner corner__top__right"></span>
      <span className="corner corner__bottom__left"></span>
      <span className="corner corner__bottom__right"></span>
      <CSSTransition key={foundExperience.id} appear={true} timeout={10000} classNames='fade'>
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
         <ul className="experiences__list">
          {foundExperience.role.map((list, index) => (
            <li className="list__items" key={index}>
              <MdKeyboardArrowRight className="experience__icon" />
              <span>{list}</span>
            </li>
          ))}
        </ul>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Experience;
