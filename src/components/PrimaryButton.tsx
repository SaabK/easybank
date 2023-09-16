import React from 'react';
import { IPrimaryButton } from '../types';

function PrimaryButton({ text }: IPrimaryButton) {
  return (
    <button>{text}</button>
  )
}

export default PrimaryButton;