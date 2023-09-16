import React from 'react';
import logo from '../assets/logo.svg'
import PrimaryButton from './PrimaryButton';

function Navbar() {
  return (
    <div className="bg-white z-30 relative">
      <header className="container py-3 flex justify-between items-center">
        <img src={logo} alt="Easybank" />

        <nav className="flex gap-x-6 text-sm">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
          <a href="/careers">Careers</a>
        </nav>

        <PrimaryButton text='Request Invite' />
      </header>
    </div>
  )
}

export default Navbar