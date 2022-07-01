import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Front from './Front';
import ContactPage from './ContactPage';
import ConfirmationPage from './ConfirmationPage';

function AppRoutes() {
  return (
    <Routes className="AppRoutes">
      <Route path="/" element={<Front />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
};

export default AppRoutes;
