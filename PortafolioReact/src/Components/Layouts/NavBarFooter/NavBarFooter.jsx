import React from 'react';
import { ItemNavbarFooter } from '../../Ui/ItemNavbarFooter/ItemNavbarFooter';

export const NavBarFooter = () => {
  return (
    <nav>
      <ul className='List-footer'>
        <li>
          <ItemNavbarFooter
            href="https://www.facebook.com/?locale=es_LA"
            iconName="facebook-square"
            iconType="logo"
            iconAnimation="tada"
            iconClass="icon-facebook"
            iconColor="#ffffff"
          />
        </li>
        <li>
          <ItemNavbarFooter
            href="https://x.com/?lang=es"
            iconName="twitter"
            iconType="logo"
            iconAnimation="tada"
            iconClass="icon-twitter"
            iconColor="#1da1f2"
          />
        </li>
        <li>
          <ItemNavbarFooter
            href="https://www.instagram.com/"
            iconName="instagram"
            iconType="logo"
            iconAnimation="tada"
            iconClass="icon-instagram"
            iconColor="#e1306c"
          />
        </li>
        <li>
          <ItemNavbarFooter
            href="https://github.com/santimiranda791"
            iconName="github"
            iconType="logo"
            iconAnimation="tada"
            iconClass="icon-linkedin"
            iconColor="#0077b5"
          />
        </li>
      </ul>
    </nav>
  );
};