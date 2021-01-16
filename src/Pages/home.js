import React, { useState } from 'react';


import Hero from '../Components/Hero/hero';
import Navbar from '../Components/Navbar/navbar';
import Projects from '../Components/Projects/projects';
import About from '../Components/About/about';
import Contact from '../Components/Contact/contact';


const home = () => {
  // const [ isOpen, setIsOpen ] = useState(false)

  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }
  //This is setting the state from true/false on Toggle


  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default home;
