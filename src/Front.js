import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Credits from './Credits';
import BTS from './BTS';
import Bios from './Bios';
import Contact from './Contact';

import './Front.css';

const Front = () => {
  return (
    <div className="Front">
      <NavBar />
      <Home />
      <About />
      <Credits />
      <BTS />
      <Bios />
      <Contact />
    </div>
  )
}

export default Front;

// cast and crew - credits (embedded video)
// behind the scenes
// about the principles
  // now(?):
    // we are introverts
    // pictures of the backs of our heads
  // future:
    // bios for us
    // info about Q Tango
// contact form
