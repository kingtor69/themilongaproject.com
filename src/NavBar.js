import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import imageRefs from './imageRefs';

import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="NavBar" bg="light" expand="lg">
      <Navbar.Brand href="/"><img src={imageRefs.title010Grad10} alt="Milonga" className="NavBar-Brand-img" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="Navbar-basic-nav">
        <Nav className="Navbar-links">
          <Nav.Link className="NavBar-Link" href="#Home-top">home</Nav.Link>
          <Nav.Link className="NavBar-Link" href="#About">about</Nav.Link>
        </Nav>
      </Navbar.Collapse>
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
