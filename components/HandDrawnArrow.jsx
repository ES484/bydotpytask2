import Image from 'next/image';
import React from 'react';
import HandDrawnArrowImg from '@/appImages/hand-drawn_arrow.svg';

const HandDrawnArrow = () => {
  return (
    <div className={`absolute top-[65%] left-[45%] z-50`}>
        <Image 
          src={HandDrawnArrowImg} 
          alt='hand drawn arrow' 
          width={300} 
          height={200} 
        />
    </div>
  )
}

export default HandDrawnArrow;
