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
    <main id='main'>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Content;
