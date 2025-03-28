import React from 'react';
import { NavBar } from '../NavBar/NavBar';

export const Header = () => {
  return (
    <header>
      <h1>
        Santiago <span className="highlight">Miranda</span>
      </h1>
      <NavBar />
    </header>
  );
};