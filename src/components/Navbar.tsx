import React from 'react';
import logo from '../assets/logo.svg'
import PrimaryButton from './PrimaryButton';

function Navbar() {
  return (
    <header>
      <img src={logo} alt="Easybank" />

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
      </nav>

      <PrimaryButton text='Request Invite' />
    </header>
  )
}

export default Navbar