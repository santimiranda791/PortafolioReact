import React from 'react';
import { ItemNavbar } from "../../Ui/ItemNavBar/ItemNavBar";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <ul className='List'>
      <li>
          <Link to="/">
            <ItemNavbar contenido="Home" />
          </Link>
        </li>
        <li>
          <Link to="/education">
            <ItemNavbar contenido="Education" />
          </Link>
        </li>
        <li>
          <Link to="/services">
            <ItemNavbar contenido="Services" />
          </Link>
        </li>
        <li>
          <Link to="/technical-skills">
            <ItemNavbar contenido="Technical skills" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};