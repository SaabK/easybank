import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import logo from '../assets/logo.svg';
import { social } from '../data/data';

function Footer() {
  return (
    <footer>
      <div>

        <div>
          <img src={logo} alt="Easybank" />

          <ul>
            {
              social.map((social, index) => (
                <li key={index}>
                  <img src={social.image} alt={social.name} />
                </li>
              ))
            }
          </ul>
        </div>

        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>

        <ul>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>

      </div>

      <div>

        <PrimaryButton text='Request Invite' />

        <span>&copy; Easybank. All Rights Reserved</span>

      </div>
    </footer>
  )
}

export default Footer