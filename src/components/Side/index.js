import React from 'react';
import './style.css';
import Github from '../../assets/images/github.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Twitter from '../../assets/images/twitter.svg';
import Facebook from '../../assets/images/facebook.svg';

const SideElements = () => (
  <aside id='side'>
    <div className='left__side d-none d-lg-block'>
      <ul className='left__side__socialLinks' data-aos='fade-right'>
        <li>
          <a
            href='https://github.com/abdulkadiret'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={Github}
              className='social__icons'
              alt='github'
              aria-hidden='true'
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/abdulkadir-awel-23781a1a4/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={Linkedin}
              className='social__icons'
              alt='linkedin'
              aria-hidden='true'
            />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/home'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={Twitter}
              className='social__icons'
              alt='twitter'
              aria-hidden='true'
            />
          </a>
        </li>
        <li>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <img
              src={Facebook}
              className='social__icons'
              alt='facebook'
              aria-hidden='true'
            />
          </a>
        </li>
      </ul>
    </div>
    <div className='right__side d-none d-lg-block'>
      <div className='right__side__mailto' data-aos='fade-left'>
        <a
          href='mailto:akey.maneth@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='email__link'
        >
          <span className='mailto'>akey.maneth@gmail.com</span>
        </a>
      </div>
    </div>
  </aside>
);

export default SideElements;
