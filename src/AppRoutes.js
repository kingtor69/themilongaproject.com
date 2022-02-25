import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';

function AppRoutes() {
  return (
    <Routes className="AppRoutes">
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
