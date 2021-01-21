import React, { useState } from 'react';

import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import Projects from '../Components/Projects/Projects';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Skills from '../Components/Skills/Skills';


const Home = () => {
  const [ hover, setHover ] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer onHover={onHover} hover={hover}/>
    </div>
  )
}

export default Home;
