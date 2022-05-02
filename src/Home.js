import React from 'react';
import About from './About';
import imageRefs from './imageRefs';

import './Home.css';    

function Home() {
  return (
    <div className="Home">
      <div className="Home-bg">
        <img src={imageRefs.title010Grad10} alt="Milonga" className="Home-img-h1" />
        <img src={imageRefs.camp} alt="" aria-hidden="true" className="Home-img-bg" />
      </div>
      <div className="Home-text">
        <h2 className="Home-header">An Illustrated Audio Play</h2>
        <p id="Home-one-liner"><i>A homeless woman with a guilty past heals herself through tango</i></p>
      </div>
    </div>
  );
}

export default Home;
