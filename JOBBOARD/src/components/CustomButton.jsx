import { Button } from '@headlessui/react'
import React from 'react'

const CustomButton = ({title, containerStyle, iconRight, type, onClick}) => {
  return ( <button
  onClick={onClick}
  type={type}
  className={`inline-flex items-center 
    ${containerStyle}`}
    >
        {title}

        {iconRight && <div className='ml-2'>{iconRight}</div>}
    </button>
  )
};

export default CustomButton