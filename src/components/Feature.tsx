import React from 'react'
import { IFeature } from '../types';

function Feature({ image, title, body }: IFeature) {
  return (
    <div className="flex flex-col gap-5 items-center md:items-start">
      <img src={image} className="w-fit" />
      <h2 className="text-xl">{title}</h2>
      <p className="text-dark-blue/80 font-light text-center md:text-start">{body}</p>
    </div>
  )
}

export default Feature;