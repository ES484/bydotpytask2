import React from 'react'
import Footer from '../Footer';
import Logo from '../common/Logo';

const MainLayout = ({ children }) => {
  return (
    <div className='w-[50%] p-6 pb-0'>
         <Logo />
         {children}
         <Footer />
    </div>
  )
}

export default MainLayout;
