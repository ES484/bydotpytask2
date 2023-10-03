import Image from 'next/image';
import React from 'react';
import LogoImg from '@/appImages/logo.svg';

const Logo = () => {
  return (
    <div>
      <Image 
         src={LogoImg}
         alt='markatty'
         width={85}
         height={35}
      />
    </div>
  )
}

export default Logo;
