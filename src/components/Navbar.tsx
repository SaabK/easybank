import React from 'react';
import logo from '../assets/logo.svg'
import PrimaryButton from './PrimaryButton';
import hamburgerMenu from '../assets/icon-hamburger.svg';

function Navbar() {
  return (
    <div className="bg-white z-30 relative">
      <header className="container flex justify-between items-center py-3">
        <img src={logo} alt="Easybank" />

        <nav className="hidden md:flex gap-x-6 text-sm">
          <a className="flex flex-col relative group" href="/">
            Home
            <span className="h-1 w-full bg-lime-green absolute -bottom-[22px] hidden group-hover:block"></span>
          </a>
          <a className="flex flex-col relative group" href="/about">
            About
            <span className="h-1 w-full bg-lime-green absolute -bottom-[22px] hidden group-hover:block"></span>
          </a>
          <a className="flex flex-col relative group" href="/contact">
            Contact
            <span className="h-1 w-full bg-lime-green absolute -bottom-[22px] hidden group-hover:block"></span>
          </a>
          <a className="flex flex-col relative group" href="/blog">
            Blog
            <span className="h-1 w-full bg-lime-green absolute -bottom-[22px] hidden group-hover:block"></span>
          </a>
          <a className="flex flex-col relative group" href="/careers">
            Careers
            <span className="h-1 w-full bg-lime-green absolute -bottom-[22px] hidden group-hover:block"></span>
          </a>
        </nav>

        <PrimaryButton text='Request Invite' className='hidden md:block' />

        <img src={hamburgerMenu} className='cursor-pointer md:hidden' />
      </header>
    </div>
  )
}

export default Navbar