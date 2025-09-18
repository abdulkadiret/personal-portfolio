import React, { useState, useEffect, useCallback } from 'react';
import './style.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/images/logo.png';
import DownloadIcon from '../../assets/images/download-icon.gif';
import DarkMode from '../DarkMode/index';

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const Navigation = () => {
  const [navbar, setNavbar] = useState({ show: true, bg: false });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 0) {
      setNavbar({ show: true, bg: false });
    } else if (currentScrollY <= 180) {
      setNavbar({ show: true, bg: false });
    } else if (currentScrollY < lastScrollY) {
      setNavbar({ show: true, bg: true });
    } else {
      setNavbar({ show: false, bg: false });
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const getNavbarClass = () => {
    if (navbar.show && !navbar.bg) return 'navbar--transparent';
    if (navbar.show && navbar.bg) return 'navbar--solid';
    if (!navbar.show) return 'navbar--hidden';
    return '';
  };

  const handleNavItemClick = () => {
    if (window.innerWidth < 992) {
      setExpanded(false);
    }
  };

  return (
    <Navbar
      className={getNavbarClass()}
      collapseOnSelect
      expand='lg'
      variant='light'
      fixed='top'
      expanded={expanded}
    >
      <Navbar.Brand
        onClick={() => scroll.scrollToTop()}
        className='navbar-logo'
        data-aos='fade-down'
        style={{ cursor: 'pointer' }}
      >
        <img className='logo' src={logo} alt='akey logo' />
      </Navbar.Brand>

      {/* Dark Mode for Mobile */}
      <div className='navbar-extras-mobile' data-aos='fade-down'>
        <span className='darkMode-mobile'>
          <DarkMode />
        </span>

        <Navbar.Toggle
          className='nav_toggle'
          aria-controls='responsive-navbar-nav'
          aria-label='Toggle navigation'
          onClick={() => setExpanded(!expanded)}
        />
      </div>

      <Navbar.Collapse className='my-2' id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          {navItems.map(({ label, to }) => (
            <Nav.Item key={to} className=' mb-2'>
              <Link
                data-aos='fade-down'
                to={to}
                spy={true}
                smooth={true}
                offset={-67}
                duration={500}
                delay={300}
                className='nav-links'
                activeClass='active'
                onClick={handleNavItemClick}
              >
                {label}
              </Link>
            </Nav.Item>
          ))}
        </Nav>

        <div className='pl-3 pl-lg-0' data-aos='fade-down'>
          <a
            href='https://drive.google.com/file/d/1BsuZFuWce9dsfdkxsdzKedplYJ8TgNEt/view'
            target='_blank'
            rel='noopener noreferrer'
            className='cv__link btn mr-lg-3 pt-1'
            aria-label='Download CV'
          >
            CV
            <img
              className='download__icon'
              src={DownloadIcon}
              alt='download icon'
            />
          </a>
        </div>

        {/* Dark Mode for Desktop */}
        <span className='darkMode-desktop' data-aos='fade-down'>
          <DarkMode />
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
