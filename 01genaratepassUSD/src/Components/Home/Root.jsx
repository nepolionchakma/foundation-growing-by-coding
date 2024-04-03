import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

const Root = ({ count }) => {
    return (
        <div>
            <Header count={count}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;