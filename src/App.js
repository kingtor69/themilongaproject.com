import React from 'react';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';
import Copyright from './Copyright';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <Copyright />
    </div>
  );
}

export default App;
