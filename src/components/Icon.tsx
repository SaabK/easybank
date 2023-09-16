import React, { useState } from 'react'
import { IIcon } from '../types';

const hoverColor = '#31d35c';
const defaultColor = '#fff';

function Icon({ width, height, d }: IIcon) {
  const [color, setColor] = useState<string>(defaultColor)

  const handleMouseOver = () => {
    setColor(hoverColor);
  }

  const handleMouseOut = () => {
    setColor(defaultColor);
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}><path fill={color} d={d} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} /></svg>
  )
}

export default Icon;