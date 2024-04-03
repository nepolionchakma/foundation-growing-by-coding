import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const RootHome = () => {
    return (
        <div className='flex flex-col items-center gap-5'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootHome;