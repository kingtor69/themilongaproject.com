import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Front from './Front';

function AppRoutes() {
  return (
    <Routes className="AppRoutes">
      <Route path="/" element={<Front />} />
    </Routes>
  );
}

export default AppRoutes;
