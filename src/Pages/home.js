import React from 'react';

import Hero from '../Components/Hero/hero';
import Navbar from '../Components/Navbar/navbar';
// import Sidebar from '../Components/Sidebar/Sidebar';
import Projects from '../Components/Projects/projects';
import About from '../Components/About/about';
import Contact from '../Components/Contact/contact';
import Footer from '../Components/Footer/Footer';
import Skills from '../Components/Skills/Skills';
import '../App.css';

//Data
import { ProjectData } from '../Components/Projects/ProjectData';

// import Aos from "aos";
// import "aos/dist/aos.css";

const Home = () => {
  // const [ isOpen, setIsOpen ] = useState(false);
    
	// useEffect(() => {
	// 	Aos.init({});
	// }, []);

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
