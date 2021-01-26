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
    <main id='main' className='main__content'>
      <Hero aboutSectionRef={aboutSectionRef} />
      <About className='main__section' aboutSectionRef={aboutSectionRef} />
      <Experience className='main__section' />
      <Projects className='main__section' />
      <Contact className='main__section' />
      <Side />
      <Footer />
    </main>
  );
};

export default Content;
