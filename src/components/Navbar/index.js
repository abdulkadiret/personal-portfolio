import React from 'react';
import './style.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' variant='light'>
        <Navbar.Brand href='/' className='navbar-logo'>
          <img className='logo' src={logo} alt='akey logo' />
        </Navbar.Brand>
        <Navbar.Toggle
          className='nav_toggle'
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link>
              <Link
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
            </Nav.Link>

            <Nav.Link>
              <Link
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
            </Nav.Link>

            <Nav.Link>
              <Link
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
            </Nav.Link>

            <Nav.Link>
              <Link
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
            </Nav.Link>
          </Nav>
          <span>
            <a
              href='https://drive.google.com/file/d/1Dbc_yHM5JgPvxndbFLwm6wWiwz89Cp2s/view'
              target='_blank'
              rel='noopener noreferrer'
              className='cv__link btn mr-3'
            >
              CV
            </a>
          </span>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
