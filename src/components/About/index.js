import React, { useRef, useEffect, useState, useMemo } from 'react';
import './style.css';
import { Container } from 'react-bootstrap';
import ProfilePicture from '../../assets/images/profile-picture-v1.jpg';
import skillsData from '../../assets/data/skillData';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const About = ({ className, aboutSectionRef }) => {
  const [activeTab, setActiveTab] = useState('All');
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const allSkills = skillsData.flatMap((domain) =>
    domain.skills.map((skill) => ({
      ...skill,
      domain: domain.domainName,
    }))
  );

  const filteredSkills =
    activeTab === 'All'
      ? allSkills
      : allSkills.filter((skill) => skill.domain === activeTab);

  const domains = useMemo(
    () => ['All', ...skillsData.map((d) => d.domainName)],
    []
  );

  const checkScroll = () => {
    requestAnimationFrame(() => {
      const el = scrollRef.current;
      if (!el) return;

      const precision = 2;

      const atStart = el.scrollLeft <= precision;
      const atEnd =
        el.scrollLeft + el.clientWidth >= el.scrollWidth - precision;

      setCanScrollLeft(!atStart);
      setCanScrollRight(!atEnd);
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Initial check
    checkScroll();

    // Scroll listener
    el.addEventListener('scroll', checkScroll);

    // Resize observer to detect layout changes
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      resizeObserver.disconnect();
    };
  }, [domains]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <section>
      <div id='about' className={`${className} pb-5`} ref={aboutSectionRef}>
        <Container className='about__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-9 col-lg-offset-2'>
          <h1 className='center' data-aos='fade-up'>
            about myself
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
                I am a full stack web developer with previous experience as a
                public health professional. Having changed my career to software
                engineering with CodeYourFuture, I am now looking for a new
                opportunity to work on exciting digital products. I am eager to
                work in a positive, friendly and collaborative environment where
                I can both learn from talented colleagues and use my versatile
                skill set to help others grow and thrive. I am highly motivated,
                quick to learn new skills. I am open to new ideas and always
                excited to take on new challenges and tasks that help me further
                develop my skills.
              </p>

              <ul className='personal__description emoji-list'>
                <li data-aos='fade-up'>
                  I love coding, problem solving and working in collaboration
                  with others 💜
                </li>
                <li data-aos='fade-up'>
                  I like applying my coding skills to develop something that has
                  a positive impact on people's lives 👍
                </li>
                <li data-aos='fade-up'>
                  I also enjoy socialising with friends, playing and watching
                  football, cooking and keeping myself active by taking a walk
                  in green spaces while reconnecting with nature ⚽
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
              {/* Left Scroll Button */}
              {canScrollLeft && (
                <button className='scroll-btn left' onClick={scrollLeft}>
                  <MdKeyboardArrowLeft className='slider-icon' />
                </button>
              )}

              <div
                className='nav-tabs-wrapper flex-grow-1 overflow-auto'
                ref={scrollRef}
              >
                {/* Bootstrap Nav Tabs */}
                <ul className='nav nav-tabs border-bottom-0' id='skillsTab'>
                  {domains.map((domain) => (
                    <li className='nav-item' key={domain}>
                      <button
                        className={`nav-link rounded-0 pb-1 pt-2 m-1 ${
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

              {/* Right Scroll Button */}
              {canScrollRight && (
                <button className='scroll-btn right' onClick={scrollRight}>
                  <MdKeyboardArrowRight className='slider-icon' />
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
