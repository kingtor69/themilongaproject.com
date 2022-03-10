import React from 'react';
import fin4a from './images/4A FIN.jpg';

import './Home.css';    

function Home() {
  return (
    <div className="Home">
      <div className="Home-bg">
        <img src={fin4a} alt="background" ario-hidden="true" />
      </div>
      <div className="Home-text">
        <h1>Milonga</h1>
        <h2>An Illustrated Audio Play</h2>
      </div>
    </div>
  );
}

export default Home;
