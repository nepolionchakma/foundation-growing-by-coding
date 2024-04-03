import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ count }) => {
    return (
        <div className='bg-orange-600 p-8 flex gap-6'>
            <Link className=' hover:bg-blue-800' to={""}>Home</Link>
            <Link className=' hover:bg-red-800 ' to={"/login"}>LogIn</Link>
            <Link className=' hover:bg-red-800 ' to={"/contact"}>Contact Us</Link>
            <Link className=' hover:bg-red-800 ' to={"/generatepassword"}>Generate Password</Link>
            <Link className=' hover:bg-red-800 ' to={"/inputbox"}>inputbox</Link>
            <p>{count}</p>
        </div>
    );
};

export default Header;