import React from 'react';
import { Navbar } from 'react-bootstrap';
import imageRefs from './imageRefs';

const NavBar = () => {
  return (
    <Navbar className="NavBar" bg="white" expand="lg">
      <Navbar.Brand href="/"><img src={imageRefs.title010Grad10} alt="Milonga" className="NavBar-Brand-img" /></Navbar.Brand>
    </Navbar>
  )
}

// home (top)
// about the project and/or process (text coming from Julie)
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

export default NavBar;
