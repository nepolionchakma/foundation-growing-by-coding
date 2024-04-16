import React from 'react';
import { useAuth } from './authContex/authContex';

const Home = () => {
    const { user } = useAuth()
    console.log(user);
    return (
        <div>
            Home
        </div>
    );
};

export default Home;