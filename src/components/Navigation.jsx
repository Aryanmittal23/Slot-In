import React from 'react'
import"./Navigation.css"
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li href='#'>Home</li>
        <li href='#'>About</li>
        <li href='#'>login</li>
      </ul>
    </nav>
  )
}

export default Navigation

