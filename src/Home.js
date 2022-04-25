import React from 'react';
import NavBar from './NavBar';
import imageRefs from './imageRefs';

import './Home.css';    

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="Home-bg">
        <img src={imageRefs.title010Grad10} alt="Milonga" className="Home-img-h1" />
        <img src={imageRefs.camp} alt="" aria-hidden="true" className="Home-img-bg" />
      </div>
      <div className="Home-text">
        <h2>An Illustrated Audio Play</h2>
      </div>
    </div>
  );
}

export default Home;
