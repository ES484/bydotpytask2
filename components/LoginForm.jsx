"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import LangIcon from '@/appIcons/lang.svg';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useRouter } from 'next/navigation';
import CustomButton from './common/CustomButton';
import CustomLabel from './common/CustomLabel';
import CustomInput from './common/CustomInput';

const LoginForm = () => {
    const [countrySymbol, setCountrySymbol] = useState('EG');
    const router = useRouter();
  return (
    <div className='w-full md:w-[80%] mx-auto'>
      <div>
        <div>
            <CustomLabel 
                labelFor={'name'}
                text={'text'}
                required={true}
            />
            <CustomInput
                type = 'text'
                id = 'name'
                placeholder = 'Enter your name'
                required = {true}
            />
        </div>
        <div>
            <CustomLabel 
                labelFor={'email'}
                text={'email'}
                required={true}
            />
            <CustomInput
                type = 'email'
                id = 'email'
                placeholder = 'Enter your email'
                required = {true}
            />
        </div>
        <div>
            <CustomLabel 
                labelFor={'phone'}
                text={'phone number'}
                required={true}
            />
            <div className="bg-gray-50 border border-gray-300 placeholder:text-[#667085] text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:outline-none focus:border-purple-300 focus:placeholder:text-black focus:outline-offset-0 focus:outline-purple-200 block w-full p-2">
                <PhoneInput
                    defaultCountry="EG"
                    type="text"
                    defaultValue={'EG'}
                    placeholder={``}
                    onChange={(value) => {console.log({ value })}}
                    className="border-b-[1px] pb-3"
                    style={{ borderBottomColor: '#e5e7eb' }}
                    onFocus={(e) =>
                        (e.target.style.borderBottomColor = '#3f3f46')
                    }
                    onBlur={(e) => (e.target.style.borderBottomColor = '#e5e7eb')}
                    onCountryChange={(country) => setCountrySymbol(country)} 
                />
                {/* <p>{getCountryCallingCode(countrySymbol)}</p> */}
                
            </div>
        </div>
        <div>
            <CustomLabel 
                labelFor={'password'}
                text={'password'}
                required={true}
            />
            <CustomInput
                type = 'password'
                id = 'password'
                placeholder = 'Create a password'
                required = {true}
            />
            <p className="text-primaryTextColor text-sm font-light pt-2 pb-5">{capitalizeFirstLetter(`must be at least 8 characters`)}</p>
        </div>
        <CustomButton 
            text={'get started'}
            handleClick={() => router.push('/otp')}
        />
        <div className='py-4'>
            <div className='flex justify-center items-center'>
                <p className="text-primaryTextColor pe-2">{capitalizeFirstLetter(`already have an account?`)}</p>
                <Link className="text-[#6941C6] font-semibold" href={'/'}>{capitalizeFirstLetter(`log in`)}</Link>
            </div>
            <div className='flex justify-center items-center pt-5'>
                <p className='text-[#667085] text-base'>عربي</p>
                <Image 
                    src={LangIcon}
                    alt='change language'
                    width={30}
                    height={30}
                />
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
