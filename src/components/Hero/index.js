import React, { useState, useEffect } from 'react';
import './style.css';
import Video from '../../assets/videos/video_1.mp4';
import SlideUp from '../../assets/images/slide-up.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Hero = ({ aboutSectionRef }) => {
  const [showPointUpIcon, setShowPointUpIcon] = useState(false);

  const toggleIconVisibility = () => {
    if (window.pageYOffset >= 300) {
      setShowPointUpIcon(true);
    } else {
      setShowPointUpIcon(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleIconVisibility);
  });

  const scrollToRef = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section id='intro'>
      <video className='hero_background' autoPlay loop muted>
        <source src={Video} type='video.mp4' />
      </video>
      <div
        className='hero_content'
        id='hero_content'
        name='hero_content'
        data-aos='zoom-in'
      >
        <h1 className='intro__heading'>
          <span className='greeting'>Hi!</span>
          <span className='wave__hand'>&#128075;</span>
          <span className='intro_text'>my name is</span>
          <span className='name'>Abdulkadir</span>
          <span className='role'>I'm a Full-Stack Developer</span>
        </h1>
      </div>
      <div
        className='scroll__to__ref'
        data-aos='fade-up'
        data-aos-anchor='#hero_content'
        onClick={() => scrollToRef(aboutSectionRef)}
      >
        <div className='indicator'>
          <OverlayTrigger
            placement='top'
            trigger={['hover', 'focus']}
            overlay={<Tooltip className='top'>Scroll down</Tooltip>}
          >
            <span></span>
          </OverlayTrigger>
        </div>
      </div>

      <div className='scroll__to__top'>
        {showPointUpIcon && (
          <div onClick={() => scrollToTop()}>
            <span className='point__up__emoji'>
              <OverlayTrigger
                placement='top'
                trigger={['hover', 'focus']}
                overlay={<Tooltip className='top'>Back to top</Tooltip>}
              >
                <img
                  className='slideUp__icon'
                  src={SlideUp}
                  alt='point up icon'
                  aria-hidden='true'
                />
              </OverlayTrigger>
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
