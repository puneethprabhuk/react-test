import React from 'react';
import logo from '../assets/images/react-logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="logo" />
        <h3>ReactFacts</h3>
        <h4>React course Project - 1</h4>
    </nav>
  )
}

export default Navbar