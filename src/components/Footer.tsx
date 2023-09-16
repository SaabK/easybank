import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import logo from '../assets/logo-white.svg';
import { social } from '../data/data';
import Icon from './Icon';

function Footer() {
  return (
    <div className="bg-dark-blue text-white py-10">
      <footer className="container flex justify-between">
        <div className="flex justify-between gap-28">

          <div className="flex flex-col justify-between">
            <img src={logo} alt="Easybank" />

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

          <ul className="font-light text-white/90 text-sm flex flex-col gap-2.5">
            <li className="hover:text-lime-green cursor-pointer">About Us</li>
            <li className="hover:text-lime-green cursor-pointer">Contact</li>
            <li className="hover:text-lime-green cursor-pointer">Blog</li>
          </ul>

          <ul className="font-light text-white/90 text-sm flex flex-col gap-2.5">
            <li className="hover:text-lime-green cursor-pointer">Careers</li>
            <li className="hover:text-lime-green cursor-pointer">Support</li>
            <li className="hover:text-lime-green cursor-pointer">Privacy Policy</li>
          </ul>

        </div>

        <div className="flex flex-col justify-between items-end">

          <PrimaryButton text='Request Invite' />

          <span className="text-sm font-light text-white/70">&copy; Easybank. All Rights Reserved</span>

        </div>
      </footer>
    </div>
  )
}

export default Footer