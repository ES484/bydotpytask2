import React from 'react'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

const CustomButton = ({ text, handleClick }) => {
  return (
    <button 
        className='bg-primary_BG w-full border-1 rounded-lg border-primary_BG py-3 text-white mt-5' 
        type='submit'
        onClick={handleClick}
    >
        {capitalizeFirstLetter(`${text}`)}
    </button>
  )
}

export default CustomButton;
