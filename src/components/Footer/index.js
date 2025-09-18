import React from 'react';
import './style.css';
import { TbBrandGithub } from 'react-icons/tb';
import { RiTwitterXFill } from 'react-icons/ri';
import { SlSocialLinkedin } from 'react-icons/sl';
import { ImCodepen } from 'react-icons/im';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer__content'>
        <div className='footer__copyright'>
          <span>Copyright © AkeyDev {new Date().getFullYear()}</span>
        </div>
        <ul className='footer__social__content d-lg-none'>
          {[
            {
              icon: <TbBrandGithub className='social__icons p-1' />,
              label: 'Github',
              link: 'https://github.com/abdulkadiret',
            },
            {
              icon: <SlSocialLinkedin className='social__icons p-1' />,
              label: 'Linkedin',
              link: 'https://www.linkedin.com/in/abdulkadir-awel-23781a1a4/',
            },
            {
              icon: <RiTwitterXFill className='social__icons p-1' />,
              label: 'X (Twitter)',
              link: 'https://x.com/Akey_Awel',
            },
            {
              icon: <ImCodepen className='social__icons p-1' />,
              label: 'Openprocessing',
              link: 'https://openprocessing.org/user/223890#sketches',
            },
          ].map((social, idx) => (
            <li key={idx} className='mx-2 px-1 py-2'>
              <a
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
                className='social__icon__btn'
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
