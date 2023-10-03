import React from 'react';
import Image from 'next/image';
import SignUpBGImage from '@/appImages/sign_up_bg_image.png';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

const PageSidebar = ({ icon, header }) => {
  return (
    <div
      className="relative w-[50%] min-h-screen bg-cover bg-no-repeat "
      style={{ 
        backgroundImage: `url(${SignUpBGImage.src})`
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#2F234A] to-[#7F56D9] opacity-95"></div>
      <div className='absolute top-1/3 ps-20'>
            <Image 
                src={icon} 
                alt='icon' 
                width={80} 
                height={80} 
            />
            <div className='text-white pt-8'>
                <h2 className='text-4xl w-[60%] pb-5'>
                    {header}
                </h2>
                <p className='text-base w-[85%]'>
                        {capitalizeFirstLetter(`create a free account and get full access to all features for 30-days. `)}
                        {capitalizeFirstLetter(`no credit card needed. `)}
                        {capitalizeFirstLetter(`get started in 2 minutes.`)}
                </p>
            </div>
     </div>
    </div>
  )
}

export default PageSidebar;
