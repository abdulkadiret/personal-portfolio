import React, { useState } from 'react';
import './style.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { TbBrandGithub } from 'react-icons/tb';
import { RiTwitterXFill } from 'react-icons/ri';
import { SlSocialLinkedin } from 'react-icons/sl';
import { ImCodepen } from 'react-icons/im';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const SideElements = () => {
  const [showContent, setShowContent] = useState(true);

  const toggleSideContents = (e) => {
    setShowContent((prev) => !prev);
  };

  return (
    <aside id='side' className='position-relative'>
      <div className='left__side d-none d-lg-block'>
        {showContent && (
          <ul className='left__side__socialLinks' data-aos='fade-right'>
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
                label: 'OpenProcessing',
                link: 'https://openprocessing.org/user/223890#sketches',
              },
            ].map((social, idx) => (
              <li key={idx}>
                <OverlayTrigger
                  placement='right'
                  trigger={['hover', 'focus']}
                  overlay={<Tooltip>{social.label}</Tooltip>}
                >
                  <a
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='social__icon__btn'
                  >
                    {social.icon}
                  </a>
                </OverlayTrigger>
              </li>
            ))}
          </ul>
        )}

        <div className='toggle__side__content' data-aos='fade-right'>
          <button
            type='button'
            aria-label={showContent ? 'Hide social links' : 'Show social links'}
            onClick={toggleSideContents}
            className='side__content__toggle__btn mt-1'
          >
            {showContent ? (
              <HiArrowLeft className='toggle-icon left mb-0 p-1' />
            ) : (
              <HiArrowRight className='toggle-icon right mb-0 p-1' />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideElements;
