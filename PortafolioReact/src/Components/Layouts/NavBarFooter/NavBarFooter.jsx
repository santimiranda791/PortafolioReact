import React from 'react';
import { ItemNavbarFooter } from '../../Ui/ItemNavbarFooter/ItemNavbarFooter';

export const NavBarFooter = () => {
  return (
    <nav>
      <ul className='List-footer'>
        <ItemNavbarFooter iconName="facebook-square" iconType="logo" iconAnimation="tada" iconClass="icon-facebook" color="#ffffff" />
        <ItemNavbarFooter iconName="twitter" iconType="logo" iconAnimation="tada" iconClass="icon-twitter" iconColor="#1da1f2" />
        <ItemNavbarFooter iconName="instagram" iconType="logo" iconAnimation="tada" iconClass="icon-instagram" iconColor="#e1306c" />
        <ItemNavbarFooter iconName="linkedin-square" iconType="logo" iconAnimation="tada" iconClass="icon-linkedin" iconColor="#0077b5" />
      </ul>
    </nav>
  );
}