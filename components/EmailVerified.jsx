"use client";
import Image from 'next/image'
import React from 'react';
import VerifiedEmail from '@/appIcons/verified.svg';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import Link from 'next/link';
import BackToLogin from './common/BackToLogin';
import { useRouter } from 'next/navigation';
import CustomButton from './common/CustomButton';

const EmailVerified = () => {
    const router = useRouter();
  return (
    <div className='mx-auto text-center flex justify-center'>
     <div className='pt-16'>
        <div className='flex justify-center pb-5'>
            <Image
                src={VerifiedEmail}
                alt="email"
                width={56}
                height={56}
            />
        </div>
        <h2 className='font-semibold text-xl'>{capitalizeFirstLetter('email verified')}</h2>
        <div className='text-primaryTextColor flex flex-col gap-2 text-sm py-2'>
            <p>{capitalizeFirstLetter('your accounnt has been verified successfully.')}</p>
            <p>{capitalizeFirstLetter('click below to setup your store.')}</p>
        </div>
        <CustomButton 
            text={'continue'}
            handleClick={() => router.push('/storeInfo')}
        />
        <div className='py-4'>
            <div className='flex justify-center items-center text-sm'>
                <p className="text-primaryTextColor pe-2">{capitalizeFirstLetter(`didn't receive the email?`)}</p>
                <Link className="text-[#6941C6] font-semibold" href={'/'}>{capitalizeFirstLetter(`click to resend`)}</Link>
            </div>
            <BackToLogin />
        </div>
     </div>
    </div>
  )
}

export default EmailVerified
