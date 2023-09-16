import React from 'react'
import { IFeature } from '../types';

function Feature({ image, title, body }: IFeature) {
  return (
    <>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  )
}

export default Feature;