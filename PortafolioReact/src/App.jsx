import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home/Home';
import { Education } from './Components/Pages/Education/Education';
import { Services } from './Components/Pages/Services/Services';
import { TechnicalSkills } from './Components/Pages/TechnicalSkills/TechnicalSkills';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technical-skills" element={<TechnicalSkills />} />
      </Routes>
    </Router>
  );
};