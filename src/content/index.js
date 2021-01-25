import React, { useRef } from 'react';
import './style.css';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Side from '../components/Side';

const Content = () => {
  const aboutSectionRef = useRef(null);
  return (
    <main id='main' className='main_content'>
      <Hero aboutSectionRef={aboutSectionRef} />
      <About className='main_section' aboutSectionRef={aboutSectionRef} />
      <Experience className='main_section' />
      <Projects className='main_section' />
      <Contact className='main_section' />
      <Side />
      <Footer />
    </main>
  );
};

export default Content;
