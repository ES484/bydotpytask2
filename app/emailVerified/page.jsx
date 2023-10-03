import MainLayout from '@/components/Layouts/MainLayout';
import PageSidebar from '@/components/PageSidebar';
import ProgressBar from '@/components/ProgressBar';
import React from 'react';
import FrameIcon from '@/appIcons/frame.svg';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import EmailVerified from '@/components/EmailVerified';
import HandDrawnArrow from '@/components/HandDrawnArrow';

const Page = () => {
    const status = ['passed', 'inProgress', 'unpassed']
  return (
    <main className='flex min-h-screen relative'>
        <MainLayout>
            <ProgressBar status={status} />
            <EmailVerified />
        </MainLayout>
        <HandDrawnArrow />
        <PageSidebar icon={FrameIcon} header={capitalizeFirstLetter(`verify your account now`)} />
    </main>
  )
}

export default Page;
