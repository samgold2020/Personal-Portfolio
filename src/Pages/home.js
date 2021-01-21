import React, { useState } from 'react';

import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Projects from '../Components/Projects/Projects';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Skills from '../Components/Skills/Skills';


const Home = () => {
  const [ hover, setHover ] = useState(false)
  const [ isOpen, setIsOpen ] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer onHover={onHover} hover={hover}/>
    </>
  )
}

export default Home;
