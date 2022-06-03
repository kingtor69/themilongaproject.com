import React from 'react';
import {} from 'reactstrap';
import imageRefs from './imageRefs';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <h2>there will be a navbar here</h2>
      <p>should it include a "music" option?</p>
      {/* if yes on above, default should be muted and should be a state that is accessed in Credits.js to either play or mute the credits music */}
      {/* possible future would be to always mute the credits music and have the soundtrack playing on shuffle or some such */}
    </div>

//     <Navbar className="NavBar" bg="light" expand="lg">
//       <Navbar.Brand href="/"><img src={imageRefs.title010Grad10} alt="Milonga" className="NavBar-Brand-img" /></Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="Navbar-basic-nav">
//         <Nav className="Navbar-links">
//           <Nav.Link className="NavBar-Link" href="#Home-top">Top</Nav.Link>
//           <Nav.Link className="NavBar-Link" href="#About">The Process</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
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
