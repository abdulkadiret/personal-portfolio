import React, { useState } from 'react';
import './style.css';
import Github from '../../assets/images/github.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Twitter from '../../assets/images/twitter.svg';
import Facebook from '../../assets/images/facebook.svg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const SideElements = () => {
  const [showContent, setShowContent] = useState(true);

  const toggleSideContents = (e) => {
    e.preventDefault();
    setShowContent(!showContent);
  };

  const elements = document.getElementsByClassName(
    'side__content__toggle__btn'
  );
  const n = elements.length;
  const changeColor = (color) => {
    for (let i = 0; i < n; i++) {
      elements[i].style.color = color;
    }
  };

  for (let i = 0; i < n; i++) {
    elements[i].onmouseover = () => changeColor('#0275d8');
    elements[i].onmouseout = () => changeColor('#505050');
  }

  return (
    <aside id='side'>
      <div className='left__side d-none d-lg-block'>
        {showContent ? (
          <ul className='left__side__socialLinks' data-aos='fade-right'>
            <li>
              <a
                href='https://github.com/abdulkadiret'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='github'
              >
                <OverlayTrigger
                  placement='right'
                  trigger={['hover', 'focus']}
                  overlay={<Tooltip className='right'>Github</Tooltip>}
                >
                  <img
                    src={Github}
                    className='social__icons'
                    alt='github'
                    aria-hidden='true'
                  />
                </OverlayTrigger>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/abdulkadir-awel-23781a1a4/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='linkedin'
              >
                <OverlayTrigger
                  placement='right'
                  trigger={['hover', 'focus']}
                  overlay={<Tooltip className='right'>Linkedin</Tooltip>}
                >
                  <img
                    src={Linkedin}
                    className='social__icons'
                    alt='linkedin'
                    aria-hidden='true'
                  />
                </OverlayTrigger>
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/home'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='twitter'
              >
                <OverlayTrigger
                  placement='right'
                  trigger={['hover', 'focus']}
                  overlay={<Tooltip className='right'>Twitter</Tooltip>}
                >
                  <img
                    src={Twitter}
                    className='social__icons'
                    alt='twitter'
                    aria-hidden='true'
                  />
                </OverlayTrigger>
              </a>
            </li>
            <li>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='facebook'
              >
                <OverlayTrigger
                  placement='right'
                  trigger={['hover', 'focus']}
                  overlay={<Tooltip className='right'>Facebook</Tooltip>}
                >
                  <img
                    src={Facebook}
                    className='social__icons'
                    alt='facebook'
                    aria-hidden='true'
                  />
                </OverlayTrigger>
              </a>
            </li>
          </ul>
        ) : (
          ''
        )}
        <div className='toggle__side__content' data-aos='fade-right'>
          {showContent === true ? (
            <button
              aria-label='side content toggle button'
              onClick={toggleSideContents}
              className='side__content__toggle__btn'
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          ) : (
            <button
              aria-label='side content toggle button'
              onClick={toggleSideContents}
              className='side__content__toggle__btn'
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        </div>
      </div>
      <div className='right__side d-none d-lg-block'>
        {showContent === true ? (
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
        ) : (
          ''
        )}
        <div className='toggle__side__content' data-aos='fade-left'>
          {showContent === true ? (
            <button
              aria-label='side content toggle button'
              onClick={toggleSideContents}
              className='side__content__toggle__btn'
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          ) : (
            <button
              aria-label='side content toggle button'
              onClick={toggleSideContents}
              className='side__content__toggle__btn'
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default SideElements;
