import Image from 'next/image';
import React from 'react';
import Email from '@/appIcons/mail-support.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-[50%] pe-10 pb-5 flex justify-between fixed bottom-0 text-sm text-primaryTextColor'>
      <p>© Markatty 2022</p>
      <p className='flex items-center'>
        <Image 
           src={Email}
           alt='email'
           width={20}
           height={20}
        />
        <Link href={'/'} className='ps-2'>support@markatty.com</Link>
      </p>
    </div>
  )
}

export default Footer;
