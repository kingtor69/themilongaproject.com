import React from 'react';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar id="App-NavBar" />
      <AppRoutes />
    </div>
  );
}

export default App;
