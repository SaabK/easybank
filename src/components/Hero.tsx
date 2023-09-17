import PrimaryButton from './PrimaryButton';
import desktopIntroImage from '../assets/bg-intro-desktop.svg';
import mobileIntroImage from '../assets/bg-intro-mobile.svg';
import mockupsImage from "../assets/image-mockups.png";

function Hero() {
  return (
    <div className="bg-very-light-gray">
      <section className="container flex flex-col md:flex-row">
        <div className="h-full flex flex-col self-center gap-6 md:gap-8 order-2 md:order-1 items-center md:items-start mb-12 md:mb-0">
          <h1 className="font-medium text-4xl md:text-5xl text-dark-blue text-center md:text-start">Next generation digital banking</h1>
          <p className="text-dark-blue/80 text-sm md:text-base text-center md:text-start">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
          <PrimaryButton text='Request Invite' />
        </div>

        <div className="relative order-1 md:order-2">
          <img src={desktopIntroImage} className="hidden md:block overflow-hidden scale-150 z-10 relative left-[35%] bottom-16" />
          <img src={mobileIntroImage} className="md:hidden relative -mx-4 scale-125 bottom-5" />
          <img src={mockupsImage} className="absolute -top-[20%] z-20 md:left-[40%] md:w-[90%]" />

          {/* Desktop Design ⤵️ */}
          {/* <img src={mockupsImage} className="absolute -top-[20%] left-[40%] z-20 w-[90%]" /> */}
        </div>

      </section>
    </div>
  )
}

export default Hero;