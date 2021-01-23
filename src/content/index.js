import React from 'react';
import './style.css';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Content = () => {
  return (
    <main id='main' className='main_content'>
      <Hero />
      <About className='main_section' />
      <Experience className='main_section' />
      <Projects className='main_section' />
      <Contact className='main_section' />
      <Footer />
    </main>
  );
};

export default Content;
