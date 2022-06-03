
import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Credits from './Credits';
import BTS from './BTS';
import Bios from './Bios';
import Contact from './Contact';
import { Container, Row, Col } from 'reactstrap';

import './Front.css';

const Front = () => {
  return (
    <div className="Front">
      <NavBar />
      <Container>
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Home />
            <About />
            <Bios />
            <Credits />
            <BTS />
            <Contact />
          </Col>
          <Col md="2"></Col>
        </Row>
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
