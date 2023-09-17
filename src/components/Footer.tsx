import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import logo from '../assets/logo-white.svg';
import { social } from '../data/data';
import Icon from './Icon';

function Footer() {
  return (
    <div className="bg-dark-blue text-white py-10">
      <footer className="container flex justify-between flex-col md:flex-row gap-5 md:gap-0">
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-28">

          <div className="flex flex-col justify-between items-center gap-4 md:items-start">
            <img src={logo} alt="Easybank" className="w-fit" />

            <ul className="flex gap-2.5">
              {
                social.map((social, index) => (
                  <li key={index}>
                    <a href={social.href} target="_blank">
                      <Icon width={social.width} height={social.height} d={social.d} />
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>

          <ul className="font-light text-white/90 text-sm flex flex-col gap-2.5 items-center md:items-start">
            <li className="hover:text-lime-green cursor-pointer">About Us</li>
            <li className="hover:text-lime-green cursor-pointer">Contact</li>
            <li className="hover:text-lime-green cursor-pointer">Blog</li>
          </ul>

          <ul className="font-light text-white/90 text-sm flex flex-col gap-2.5 items-center md:items-start">
            <li className="hover:text-lime-green cursor-pointer">Careers</li>
            <li className="hover:text-lime-green cursor-pointer">Support</li>
            <li className="hover:text-lime-green cursor-pointer">Privacy Policy</li>
          </ul>

        </div>

        <div className="flex flex-col justify-between items-center md:items-end gap-4 md:gap-0">

          <PrimaryButton text='Request Invite' />

          <span className="text-sm font-light text-white/70">&copy; Easybank. All Rights Reserved</span>

        </div>
      </footer>
    </div>
  )
}

export default Footer