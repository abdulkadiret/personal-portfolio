import React from 'react';
import './style.css';
import Github from '../../assets/images/github.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Twitter from '../../assets/images/twitter.svg';
import Facebook from '../../assets/images/facebook.svg';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer__content py-2'>
        <div className='footer__copyright'>
          <span>Copyright © AkeyDev 2021</span>
        </div>
        <ul className='footer__social__content d-lg-none'>
          <li className='mx-2 px-1 py-2'>
            <a
              href='https://github.com/abdulkadiret'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='github'
            >
              <img
                src={Github}
                className='social__icons'
                alt='github'
                aria-hidden='true'
              />
            </a>
          </li>
          <li className='mx-2 px-1 py-2'>
            <a
              href='https://www.linkedin.com/in/abdulkadir-awel-23781a1a4/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='linkedin'
            >
              <img
                src={Linkedin}
                className='social__icons'
                alt='linkedin'
                aria-hidden='true'
              />
            </a>
          </li>
          <li className='mx-2 px-1 py-2'>
            <a
              href='https://twitter.com/home'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='twitter'
            >
              <img
                src={Twitter}
                className='social__icons'
                alt='twitter'
                aria-hidden='true'
              />
            </a>
          </li>
          <li className='mx-2 px-1 py-2'>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='facebook'
            >
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
    </footer>
  );
};

export default Footer;
