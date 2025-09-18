import React, { useState, useEffect, useRef } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const toggleBtnRef = useRef(null);

  const toggleSideContents = (e) => {
    e.preventDefault();
    setShowContent((prev) => !prev);
  };

  useEffect(() => {
    if (!toggleBtnRef.current) return;

    if (isHovered) {
      toggleBtnRef.current.style.color = '#0275d8';
    } else {
      toggleBtnRef.current.style.color = '#505050';
    }
  }, [isHovered]);

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
            ref={toggleBtnRef}
            aria-label='Toggle side content'
            onClick={toggleSideContents}
            className={`side__content__toggle__btn mt-1 ${
              isHovered ? 'hovered' : ''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {showContent ? (
              <HiArrowLeft className='toggle-icon left mb-0 p-1' />
            ) : (
              <HiArrowRight className='toggle-icon right mb-0 p-1' />
            )}
          </button>
        </div>
      </div>
      <div className='right__side d-none d-lg-block'>
        {showContent && (
          <div
            className='d-flex flex-column align-items-center'
            data-aos='fade-left'
          >
            <div className='side__line__1'></div>
            <div className='right__side__mailto'>
              <a
                href='mailto:akey.maneth@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='email__link'
              >
                <span className='mailto'>akey.maneth@gmail.com</span>
              </a>
            </div>
            <div className='side__line__2'></div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SideElements;
