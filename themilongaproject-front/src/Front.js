
import React from 'react';
import Home from './Home';
import Trailer from './Trailer';
import Story from './Story';
import Process from './Process';
import Credits from './Credits';
import BTS from './BTS';
import Bios from './Bios';
import Contact from './Contact';
import { Container } from 'reactstrap';

import './Front.css';

const Front = () => {
  return (
    <div className="Front">
      <Container>
          <Home />
          <Trailer />
          <Story />
          <Process />
          <Bios />
          <Credits />
          <BTS />
          <Contact />
      </Container>
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
