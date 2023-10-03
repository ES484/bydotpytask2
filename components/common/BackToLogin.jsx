import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BackArrow from '@/appIcons/back.svg';
import { useRouter } from 'next/navigation';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

const BackToLogin = () => {
    const router = useRouter();
  return (
        <button className='w-full flex justify-center items-center pt-5' onClick={() => router.back()}>
            <Image 
                src={BackArrow}
                alt='change language'
                width={15}
                height={15}
            />
            <p className='text-primaryTextColor text-base ps-3 pb-1 font-semibold'>
                {capitalizeFirstLetter('back to log in')}
            </p>
        </button>
  )
}

export default BackToLogin
