import React, { useRef, useEffect, useState, useMemo } from 'react';
import './style.css';
import { Container } from 'react-bootstrap';
import ProfilePicture from '../../assets/images/profile-picture.png';
import skillsData from '../../assets/data/skillData';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const About = ({ className, aboutSectionRef }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollRef = useRef(null);
  const activeTabRef = useRef(null);

  const domains = useMemo(
    () => ['All', ...skillsData.map((d) => d.domainName)],
    [],
  );

  const allSkills = skillsData.flatMap((domain) =>
    domain.skills.map((skill) => ({
      ...skill,
      domain: domain.domainName,
    })),
  );

  const filteredSkills =
    activeTab === 'All'
      ? allSkills
      : allSkills.filter((skill) => skill.domain === activeTab);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const tolerance = 2;

    setCanScrollLeft(scrollLeft > tolerance);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - tolerance);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Initial check
    checkScroll();

    // Scroll listener
    el.addEventListener('scroll', checkScroll);
    // Resize observer to detect layout changes
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const activeTabElement = activeTabRef.current;

    if (!container || !activeTabElement) return;

    const containerRect = container.getBoundingClientRect();
    const tabRect = activeTabElement.getBoundingClientRect();

    const offset =
      tabRect.left -
      containerRect.left -
      container.clientWidth / 2 +
      tabRect.width / 2;

    container.scrollTo({
      left: container.scrollLeft + offset,
      behavior: 'smooth',
    });

    // Recheck arrow visibility after the tab has moved
    requestAnimationFrame(checkScroll);
  }, [activeTab]);

  const handleTabNavigation = (direction) => {
    const currentIndex = domains.indexOf(activeTab);

    const nextIndex = currentIndex + direction;

    if (nextIndex < 0 || nextIndex >= domains.length) return;

    setActiveTab(domains[nextIndex]);
  };

  return (
    <section>
      <div id='about' className={`${className} pb-5`} ref={aboutSectionRef}>
        <Container className='about__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-9 col-lg-offset-2'>
          <h1 className='center' data-aos='fade-up'>
            about me
          </h1>

          <div className='about__section'>
            <div className='float-image-wrapper' data-aos='fade-up'>
              <img
                src={ProfilePicture}
                alt='Profile avatar'
                className='float-image'
              />
            </div>

            {/* Text content */}
            <div className='text-wrap-area'>
              <p className='personal__description' data-aos='fade-up'>
                I’m a full-stack web developer with a background in public
                health and a strong foundation in both frontend and backend
                technologies. My coding journey began through{' '}
                <a
                  href='https://www.codeyourfuture.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CodeYourFuture
                </a>
                ’s intensive training programme, where I discovered my passion
                for programming.
              </p>

              <p className='personal__description' data-aos='fade-up'>
                To deepen my skills, I completed an HND in Web Development at{' '}
                <a
                  href='https://www.cityofglasgowcollege.ac.uk/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  City of Glasgow College
                </a>
                . I recently graduated with a BSc (Hons) in Web & Mobile
                Development from the{' '}
                <a
                  href='https://www.uws.ac.uk/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  University of the West of Scotland (UWS)
                </a>{' '}
                with First Class honours. These experiences have prepared me to
                build scalable, user-focused solutions that follow industry best
                practices.
              </p>

              <p className='personal__description' data-aos='fade-up'>
                I’m motivated, a fast learner, and adaptable. I’m eager to
                contribute to a collaborative team, learn from experienced
                developers, and help deliver high-quality, impactful digital
                products.
              </p>

              <ul className='personal__description emoji-list'>
                <li data-aos='fade-up'>
                  I love coding, problem-solving, and working in collaboration
                  with others.
                </li>
                <li data-aos='fade-up'>
                  I enjoy using my skills to create products that make a
                  positive impact on people's lives.
                </li>
                <li data-aos='fade-up'>
                  Outside of tech, I like socialising with friends, playing and
                  watching football, cooking, and taking walks in nature to
                  recharge.
                </li>
              </ul>
            </div>
          </div>

          {/* Skills section */}
          <div className='mt-5'>
            <h2 className='center' data-aos='fade-up'>
              Skills
            </h2>

            <div
              className='nav-tabs-scroll-container d-flex align-items-center position-relative mb-3'
              data-aos='fade-up'
            >
              {/* Previous Skill Tab */}
              {canScrollLeft && (
                <button
                  type='button'
                  className='scroll-btn left'
                  onClick={() => handleTabNavigation(-1)}
                  aria-label='Previous skill category'
                >
                  <MdKeyboardArrowLeft
                    className='slider-icon left'
                    aria-hidden='true'
                  />
                </button>
              )}

              <div className='nav-tabs-wrapper' ref={scrollRef}>
                <ul className='nav nav-tabs border-bottom-0' id='skillsTab'>
                  {domains.map((domain) => (
                    <li className='nav-item' key={domain}>
                      <button
                        ref={activeTab === domain ? activeTabRef : null}
                        className={`nav-link rounded-0 m-1 ${
                          activeTab === domain ? 'active' : ''
                        }`}
                        onClick={() => setActiveTab(domain)}
                      >
                        {domain}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Skill Tab */}
              {canScrollRight && (
                <button
                  type='button'
                  className='scroll-btn right'
                  onClick={() => handleTabNavigation(1)}
                  aria-label='Next skill category'
                >
                  <MdKeyboardArrowRight
                    className='slider-icon right'
                    aria-hidden='true'
                  />
                </button>
              )}
            </div>

            {/* Skills Grid */}
            <div className='skills-grid d-flex flex-wrap' data-aos='fade-up'>
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className='skill-box text-center'
                  data-aos='fade-up'
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className='skill-icon mb-1'
                  />
                  <div className='skill-name'>{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {/* <div className='banner'></div> */}
    </section>
  );
};

export default About;
