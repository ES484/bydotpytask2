import React from 'react';
import UnPassedIcon from '@/appIcons/unpassed-step.svg';
import PassedIcon from '@/appIcons/passed-step.svg';
import InProgressIcon from '@/appIcons/in-progress-step.svg';
import Image from 'next/image';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

const ProgressBar = ({ status }) => {
  const Line1 = () => {
    return <div className={`h-1 w-full my-5 ${status[0] == 'inProgress' || status[0] == 'unpassed' ? 'bg-[#F2F4F7]' : 'bg-primary_BG'}`}></div>;
  };
  const Line2 = () => {
    return <div className={`h-1 w-full my-5 ${status[1] == 'inProgress' || status[1] == 'unpassed' ? 'bg-[#F2F4F7]' : 'bg-primary_BG'}`}></div>;
  };
    
    console.log({ status: status[0]  })
  return (
    <>
      <div className="flex items-center w-[85%] mx-auto">
      <Step icon={
        status[0] === 'inProgress' ? InProgressIcon :
        status[0] === 'unpassed' ? UnPassedIcon :
        status[0] === 'passed' ? PassedIcon : ''
      } />
      <Line1 />
      <Step icon={
        status[1] === 'inProgress' ? InProgressIcon :
        status[1] === 'unpassed' ? UnPassedIcon :
        status[1] === 'passed' ? PassedIcon : ''
      } />
      <Line2 />
      <Step icon={
        status[2] === 'inProgress' ? InProgressIcon :
        status[2] === 'unpassed' ? UnPassedIcon :
        status[2] === 'passed' ? PassedIcon : ''
      } />
    </div>
    <div className='flex justify-between flex-nowrap'>
        <div className='flex justify-start w-[1/3] -ms-8'>
            <div className='text-center'>
            <h4 className={`text-base font-semibold ${
              status[0] === 'inProgress' ? 'text-primary_BG' :
              status[0] === 'unpassed' ? 'text-[#000]' :
              status[0] === 'passed' ? 'text-[#12B76A]' : ''
            }`}>
              {capitalizeFirstLetter(`your details`)}
            </h4>
                <p className='text-xs ps-10'>{capitalizeFirstLetter(`provide your basic information`)}</p>
            </div>
        </div>
        <div className='flex justify-start w-[1/3]'>
            <div className='text-center'>
              <h4 className={`text-base font-semibold ${
                status[1] === 'inProgress' ? 'text-primary_BG' :
                status[1] === 'unpassed' ? 'text-[#000]' :
                status[1] === 'passed' ? 'text-[#12B76A]' : ''
              }`}>
                    {capitalizeFirstLetter(`confirmation`)}
                </h4>
                <p className='text-xs'>{capitalizeFirstLetter(`confirm your email`)}</p>
            </div>
        </div>
        <div className='flex justify-end w-[1/3]'>
            <div className='text-center'>
              <h4 className={`text-base font-semibold ${
                status[2] === 'inProgress' ? 'text-primary_BG' :
                status[2] === 'unpassed' ? 'text-[#000]' :
                status[2] === 'passed' ? 'text-[#12B76A]' : ''
              }`}>
                    {capitalizeFirstLetter(`store information`)}
                </h4>
                <p className='text-xs'>{capitalizeFirstLetter(`set your store main info`)}</p>
            </div>
        </div>
    </div>
    </>
  );
};

const Step = ({ icon }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={icon} alt='icon' width={60} height={60} />
    </div>
  );
};


export default ProgressBar;
