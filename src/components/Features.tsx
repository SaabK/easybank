import React from 'react'
import Feature from './Feature';
import { features } from '../data/data';


function Features() {
  return (
    <section>
      <div>
        <h1>
          Why choose Easybank?
        </h1>
        <p>We leverage Open Banking to turn your bank account into your financial hub. <br /> Control your finances like never before</p>
      </div>

      <div>
        {
          features.map(feature => (
            <Feature image={feature.image} title={feature.title} body={feature.body} />
          ))
        }
      </div>
    </section>
  )
}

export default Features;