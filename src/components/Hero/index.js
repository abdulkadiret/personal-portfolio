import React from 'react';
import './style.css';
import Video from '../../assets/videos/video_1.mp4';

const Hero = () => {
  return (
    <section id='intro' className='hero_background'>
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
    </section>
  );
};

export default Hero;
