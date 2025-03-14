import React from 'react';
import 'boxicons';

export const ItemNavbarFooter = ({ iconName, iconType, iconAnimation, iconClass, iconColor }) => {
  return (
    <li>
      <a href="">
        <box-icon 
          name={iconName} 
          type={iconType} 
          animation={iconAnimation} 
          class={iconClass} 
          style={{ color: iconColor }}
        ></box-icon>
      </a>
    </li>
  );
}