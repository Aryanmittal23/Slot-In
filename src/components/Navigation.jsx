import React from 'react'
import"./Navigation.css"
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <ul >
        <li className='navbar' >Home</li>
        <li className='navbar' >About</li>
        <li className='navbar' >login</li>
      </ul>
    </nav>
  )
}

export default Navigation

