import React from 'react'

const CustomLabel = ({ 
    labelFor, 
    className = '', 
    text, 
    required = false
}) => {
  return (
    <label 
        for={labelFor} 
        className={`${className} block mb-2 text-sm font-medium capitalize text-[#344054] pt-5`}
        required={required}
    >
        {text} {required ? '*' : ''}
    </label>
  )
}

export default CustomLabel;
