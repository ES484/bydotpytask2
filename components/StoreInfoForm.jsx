"use client";
import React, { useState } from 'react';
import Select from 'react-select';
import EnLangIcon from '@/appIcons/en.svg';
import ArLangIcon from '@/appIcons/ar.svg';
import Image from 'next/image';
import BackToLogin from './common/BackToLogin';
import CustomButton from './common/CustomButton';
import CustomLabel from './common/CustomLabel';
import CustomInput from './common/CustomInput';

const StoreInfoForm = () => {
    const langOptions = [
        {
          image: EnLangIcon,
          value: 'en',
          label: 'English',
        },
        {
          image: ArLangIcon,
          value: 'ar',
          label: 'العربية',
        },
    ];
    const storeIndustries = [
        {
            label: 'Fashion',
            value: 'Fashion'
        },
        {
            label: 'Jewelry',
            value: 'Jewelry'
        }
    ]
    const [selectedOption, setSelectedOption] = useState(langOptions[0]);
    const [selectedIndustry, setSelectedIndustry] = useState(storeIndustries[0]);
    const CustomOption = ({ innerProps, label, data }) => (
        <div {...innerProps} className='flex items-center gap-2 px-3 py-2'>
          <Image src={data.image} alt={label} width={20} height={20} />
          {label}
        </div>
    );
    const formatOptionLabel = ({ label, image }) => (
        <div className='flex items-center gap-2'>
          <Image src={image} alt={label} width={20} height={20} />
          {label}
        </div>
    );    
  return (
    <div className='mx-auto flex justify-center'>
        <div>
        <div>
            <CustomLabel 
                labelFor={'storeName'}
                text={'store name'}
            />
            <CustomInput
                type = 'text'
                id = 'storeName'
                placeholder = 'type your store name'
            />
        </div>
        <div>
            <CustomLabel 
                labelFor={'storeUrl'}
                text={'store URL'}
            />
            <div className='flex'>
                <CustomInput
                    type = 'text'
                    id = 'storeUrl'
                    placeholder = 'mystore'
                    className = "bg-gray-50 border border-gray-300 placeholder:text-[#667085] text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:outline-none focus:border-purple-300 focus:placeholder:text-black focus:outline-offset-0 focus:outline-purple-200 block w-full p-2 rounded-e-none"
                />
                <p className='bg-white border border-gray-300 text-[#344054] font-semibold text-base rounded-lg p-2 rounded-s-none border-s-0'>.markatty.com</p>
            </div>
        </div>
        <div className='pt-6'>
            <CustomLabel 
                labelFor={'lang'}
                text={'store language'}
                className='pt-0'
            />
            <Select
                options={langOptions}
                value={selectedOption}
                defaultValue={langOptions[0]}
                onChange={(option) => setSelectedOption(option)}
                components={{ Option: CustomOption, IndicatorSeparator: () => null }}
                formatOptionLabel={formatOptionLabel}
                styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      padding: 2,
                      backgroundColor: '#F9FAFB !important',
                      borderRadius: '10px',
                      fontWeight: 600
                    }),
                    container: (baseStyles) => ({
                      ...baseStyles,
                    }),
                }}
            />
        </div>
        <div className='pt-6'>
            <CustomLabel 
                labelFor={'storeIndustry'}
                text={'store industry'}
                className='pt-0'
            />
            <Select
                options={storeIndustries}
                value={selectedIndustry}
                defaultValue={storeIndustries[0]}
                onChange={(option) => setSelectedIndustry(option)}
                components={{ IndicatorSeparator: () => null }}
                styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      padding: 2,
                      backgroundColor: '#F9FAFB !important',
                      borderRadius: '10px',
                      fontWeight: 600
                    }),
                    container: (baseStyles) => ({
                      ...baseStyles,
                    }),
                }}
            />
            <span className='text-primaryTextColor text-sm pt-3 block'>
                Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)
            </span>
        </div>
        <CustomButton 
            text={'save'}
            handleClick={() => {}}
        />
        <BackToLogin />
        </div>
    </div>
  )
}

export default StoreInfoForm;
