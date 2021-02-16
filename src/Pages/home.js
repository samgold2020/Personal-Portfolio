import React from 'react';

import Hero from '../Components/Hero/hero';
import Navbar from '../Components/Navbar/navbar';
// import Sidebar from '../Components/Sidebar/Sidebar';
import Projects from '../Components/Projects/projects';
import About from '../Components/About/about';
import Contact from '../Components/Contact/contact';
import Footer from '../Components/Footer/footer';
import Skills from '../Components/Skills/skills';
import '../App.css';

//Data
import { ProjectData } from '../Components/Projects/ProjectData';

const Home = () => {

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
      <Navbar />
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
