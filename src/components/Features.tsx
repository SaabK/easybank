import React from 'react'
import Feature from './Feature';
import { features } from '../data/data';


function Features() {
  return (
    <div className="bg-light-grayish-blue/80">
      <section className=" z-10 relative container py-16 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-center md:text-start text-4xl">
            Why choose Easybank?
          </h1>
          <p className="text-center text-sm md:text-base md:text-start text-dark-blue/80">We leverage Open Banking to turn your bank account into your financial hub. <br /> Control your finances like never before</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {
            features.map((feature, index) => (
              <Feature key={index} image={feature.image} title={feature.title} body={feature.body} />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Features;