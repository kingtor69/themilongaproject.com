import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Front from './Front';
import ContactPage from './ContactPage';
import ConfirmationPage from './ConfirmationPage';

function AppRoutes() {
  return (
    <Routes className="AppRoutes">
      <Route path="/themilongaproject.com" element={<Front />} />
      <Route path="/themilongaproject.com/contact" element={<ContactPage />} />
      <Route path="/themilongaproject.com/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
};

export default AppRoutes;
