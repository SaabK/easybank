import { IPrimaryButton } from '../types';

function PrimaryButton({ text, className }: IPrimaryButton) {
  return (
    <button className={`px-7 py-2.5 text-white bg-gradient-to-r from-lime-green to-bright-cyan rounded-full text-sm w-fit hover:opacity-75 ${className}`} >{text}</button>
  )
}

export default PrimaryButton;