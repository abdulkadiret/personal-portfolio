import React, { useState, useEffect } from 'react';
import './style.css';
import Video from '../../assets/videos/video_1.mp4';
import SlideUp from '../../assets/images/slide-up.png';

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
      <div className='hero_content' id='hero_content' name='hero_content'>
        <h1>
          Hi!<span className='wave_handEmoji'>&#128075;</span>
          <span className='intro_text'>my name is</span>
          <span className='name'>Abdulkadir</span>
          <span className='role'>I'm a Full-Stack Developer</span>
        </h1>
      </div>
      <div
        className='scroll__to__ref'
        onClick={() => scrollToRef(aboutSectionRef)}
      >
        <div className='indicator'>
          <span></span>
        </div>
      </div>
      <div className='scroll__to__top'>
        {showPointUpIcon && (
          <div onClick={() => scrollToTop()}>
            <span className='point__up__emoji'>
              <img
                className='slideUp__icon'
                src={SlideUp}
                alt='point up icon'
                aria-hidden='true'
              />
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
