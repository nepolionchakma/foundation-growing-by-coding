import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import LogIn from '../Components/LogIn/LogIn';
import { AuthProvider, useAuth } from '../AuthContext/AuthContext';

const LayOut = () => {
    const { user } = useAuth()
    return (
        <div>
            <Header />
            {
                user ? <Outlet /> : <LogIn />
            }
            <Footer />
        </div>
    );
};

export default LayOut;