import React from 'react'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

const CustomInput = ({
    type='text',
    id,
    className,
    placeholder,
    required = false
}) => {
  return (
    <input 
        type={type} 
        id={id}
        className={`${className} bg-gray-50 border border-gray-300 placeholder:text-[#667085] text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:outline-none focus:border-purple-300 focus:placeholder:text-black focus:outline-offset-0 focus:outline-purple-200 block w-full p-2`} 
        placeholder={capitalizeFirstLetter(placeholder)}
        required 
    />
  )
}

export default CustomInput;
