import React from 'react'
import PrimaryButton from './PrimaryButton';
import desktopIntroImage from '../assets/bg-intro-desktop.svg';
import mockupsImage from "../assets/image-mockups.png";

function Hero() {
  return (
    <div className="bg-very-light-gray">
      <section className="container flex">
        <div className="h-full flex flex-col self-center gap-8">
          <h1 className="font-medium text-5xl text-dark-blue">Next generation digital banking</h1>
          <p className="text-dark-blue opacity-80">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
          <PrimaryButton text='Request Invite' />
        </div>

        <div className="relative">
          <img src={desktopIntroImage} className="overflow-hidden scale-150 z-10 relative left-[30%] bottom-16" />
          <img src={mockupsImage} className="absolute -top-[20%] left-[40%] z-20 w-[90%]" />
        </div>

      </section>
    </div>
  )
}

export default Hero;