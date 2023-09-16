import React from 'react'
import { IFeature } from '../types';

function Feature({ image, title, body }: IFeature) {
  return (
    <div className="flex flex-col gap-5">
      <img src={image} className="w-fit" />
      <h2 className="text-xl">{title}</h2>
      <p className="text-dark-blue opacity-80 font-light">{body}</p>
    </div>
  )
}

export default Feature;