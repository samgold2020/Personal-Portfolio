import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Projects from '../Components/Projects/Projects';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Skills from '../Components/Skills/Skills';
import '../App.css';

//Data
import { ProjectData } from '../Components/Projects/ProjectData';


import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
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

export default Home;
