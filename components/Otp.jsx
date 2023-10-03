"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Email from '@/appIcons/email.svg';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import OtpInput from 'react18-input-otp';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BackToLogin from './common/BackToLogin';
import CustomButton from './common/CustomButton';

const Otp = () => {
    const [otp, setOtp] = useState(``);
    const router = useRouter();
    const handleChangeOtp = (enteredOtp) => {
        setOtp(enteredOtp);
    };
    
  return (
    <div className='mx-auto text-center flex justify-center'>
     <div className='pt-16'>
        <div className='flex justify-center pb-5'>
            <Image
                src={Email}
                alt="email"
                width={56}
                height={56}
            />
        </div>
        <h2 className='font-semibold text-xl'>{capitalizeFirstLetter('check your email')}</h2>
        <div className='text-primaryTextColor flex flex-col gap-2 text-sm py-2'>
            <p>{capitalizeFirstLetter('we sent you code to')}</p>
            <p>omarmouneer@gmail.com</p>
        </div>
        <div className='otp text-primary_BG'>
            <OtpInput
                value={otp}
                onChange={handleChangeOtp}
                numInputs={4}
                inputStyle={{
                backgroundColor: '#FFF',
                width: '70px',
                height: '70px',
                margin: '10px',
                borderRadius: '10px',
                caretColor: '#7244C8',
                fontSize: '30px',
                outline: 'none',
                }}
                containerStyle={{
                justifyContent: 'center',
                }}
            />
        </div>
        <CustomButton 
            text={'verify email'}
            handleClick={() => router.push('/emailVerified')}
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

export default Otp;
