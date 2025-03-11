import React from 'react'
import{ ItemNavbar } from "../../Ui/ItemNavBar/ItemNavBar"


export const NavBar = () => {
  return (
    <nav>
        <ul className='List'>
          <ItemNavbar  contenido="Home"/>
          <ItemNavbar contenido="Education"/>
          <ItemNavbar contenido="Services"/>
          <ItemNavbar contenido="Technical skills"/>
        </ul>
      </nav>
  )
}
