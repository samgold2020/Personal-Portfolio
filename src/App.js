import React, { useState, useEffect } from 'react';

import Hero from '../src/Components/Hero/Hero';
import Navbar from '../src/Components/Navbar/Navbar';
import Projects from '../src/Components/Projects/Projects';
import About from '../src/Components/About/About';
import Contact from '../src/Components/Contact/Contact';
import Footer from '../src/Components/Footer/Footer';
import Skills from '../src/Components/Skills/Skills.js';
import './App.css';

//Data
import { ProjectData } from '../src/Components/Projects/ProjectData';


import Aos from "aos";
import "aos/dist/aos.css";


const App = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    
	useEffect(() => {
		Aos.init({});
	}, []);

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
      <Navbar toggle={toggle}/>
      <Hero />
      <About />
      <Projects slides={ProjectData}/>
      <Skills />
      <Contact />
      <Footer />
    </>
  ) 
}

export default App;
