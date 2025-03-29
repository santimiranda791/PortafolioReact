import React from 'react';
import 'boxicons';

export const ItemNavbarFooter = ({ href, iconName, iconType, iconAnimation, iconClass, iconColor }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="item-navbar-footer">
      <box-icon
        name={iconName}
        type={iconType}
        animation={iconAnimation}
        class={iconClass}
        style={{ color: iconColor }}
      ></box-icon>
    </a>
  );
};