import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.png';
import DownloadIcon from '../../assets/images/download-icon.gif';
import DarkMode from '../DarkMode/index';

const Navigation = () => {
  const [navbar, setNavbar] = useState({ showNavbar: true, navbarBg: false });
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    if (scrollPos >= 0) {
      setNavbar({ ...navbar, showNavbar: true, navbarBg: true });
    } else if (scrollPos >= -180) {
      setNavbar({ ...navbar, showNavbar: true, navbarBg: false });
    } else if (document.body.getBoundingClientRect().top > scrollPos) {
      setNavbar({ ...navbar, showNavbar: true, navbarBg: true });
    } else {
      setNavbar({ ...navbar, showNavbar: false, navbarBg: false });
    }
  };

  const getClass = () => {
    if (navbar.showNavbar === true && navbar.navbarBg === false) {
      return 'class_1';
    } else if (navbar.showNavbar === true && navbar.navbarBg === true) {
      return 'class_2';
    } else if (navbar.showNavbar === false && navbar.navbarBg === false) {
      return 'class_3';
    } else {
      return '';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Navbar className={getClass()} collapseOnSelect expand='lg' variant='light'>
      <Navbar.Brand href='/' className='navbar-logo' data-aos='fade-down'>
        <img className='logo' src={logo} alt='akey logo' />
      </Navbar.Brand>
      <Navbar.Toggle
        className='nav_toggle'
        aria-controls='responsive-navbar-nav'
      />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <span>
            <Link
              data-aos='fade-down'
              href='#about'
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-67}
              duration={500}
              delay={300}
              className='nav-links'
            >
              About
            </Link>
          </span>
          <span>
            <Link
              data-aos='fade-down'
              href='#experience'
              activeClass='active'
              to='experience'
              spy={true}
              smooth={true}
              offset={-67}
              duration={500}
              delay={300}
              className='nav-links'
            >
              Experience
            </Link>
          </span>
          <span>
            <Link
              data-aos='fade-down'
              href='#projects'
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-67}
              duration={500}
              delay={300}
              className='nav-links'
            >
              Projects
            </Link>
          </span>
          <span>
            <Link
              data-aos='fade-down'
              href='#contact'
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-67}
              duration={500}
              delay={300}
              className='nav-links'
            >
              Contact
            </Link>
          </span>
        </Nav>
        <span>
          <a
            href='https://drive.google.com/file/d/1BsuZFuWce9dsfdkxsdzKedplYJ8TgNEt/view'
            target='_blank'
            rel='noopener noreferrer'
            className='cv__link btn mr-lg-3'
            data-aos='fade-down'
          >
            CV
            <img
              className='download__icon'
              src={DownloadIcon}
              alt='download icon'
              aria-hidden='true'
            />
          </a>
        </span>
        <span className='darkMode' data-aos='fade-down'>
          <DarkMode />
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
