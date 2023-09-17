import React from 'react';
import closeMenuIcon from '../assets/icon-close.svg';
import { IisOpen } from '../types';

function MobileNav({ toggleMenu }: IisOpen) {
  return (
    <div className="absolute left-0 right-0 top-16 w-full px-4 md:hidden">
      <nav className="relative bg-white rounded-md p-5 z-30 flex flex-col">
        <button className="w-4 self-end" onClick={toggleMenu}>
          <img src={closeMenuIcon} className="" />
        </button>
        <ul className="flex flex-col gap-3 items-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </nav>
      <div className="fixed h-full bg-black/40 w-full top-0 left-0 z-20" />
    </div>
  )
}

export default MobileNav;