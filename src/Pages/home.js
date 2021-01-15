import React, { useState } from 'react';


import Hero from '../Components/Hero/hero';
import Navbar from '../Components/Navbar/navbar';
import Projects from '../Components/Projects/projects';
import About from '../Components/About/about';


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
    </div>
  )
}

export default home;
