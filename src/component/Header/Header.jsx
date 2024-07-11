import React from 'react';
import logo from '../../2-Photoroom.png'
import './header.css'

export default function Header() {
  return (
    <ul>
        <br/>
        <li><img src={logo} alt="logo" height='85px' className='logo1' /></li>
    </ul>
  );
}