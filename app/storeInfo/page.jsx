import MainLayout from '@/components/Layouts/MainLayout';
import PageSidebar from '@/components/PageSidebar';
import ProgressBar from '@/components/ProgressBar';
import ShoppingCartIcon from '@/appIcons/shopping_cart.svg';
import React from 'react'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import StoreInfoForm from '@/components/StoreInfoForm';
import HandDrawnArrow from '@/components/HandDrawnArrow';

const Page = () => {
    const status = ['passed', 'passed', 'inProgress'];
  return (
    <main className='flex min-h-screen relative'>
        <MainLayout>
            <ProgressBar status={status} />
            <StoreInfoForm />
        </MainLayout>
        <HandDrawnArrow />
        <PageSidebar icon={ShoppingCartIcon} header={capitalizeFirstLetter(`setup your store the way you like`)} />
    </main>
  )
}

export default Page;
