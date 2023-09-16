import React from 'react'
import PrimaryButton from './PrimaryButton';
import desktopIntroImage from '../assets/bg-intro-desktop.svg';
import mockupsImage from "../assets/image-mockups.png";

function Hero() {
  return (
    <section>
      <div>
        <h1>Next generation digital banking</h1>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
        <PrimaryButton />
      </div>

      <img src={desktopIntroImage} />
      <img src={mockupsImage} />
    </section>
  )
}

export default Hero;