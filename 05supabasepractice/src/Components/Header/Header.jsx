import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';

const Header = () => {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className=' sticky top-0'>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <Link to='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Logo</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to={'/about'} className="mr-5 hover:text-white">About</Link>
                        <Link to={'/contact'} className="mr-5 hover:text-white">Contact</Link>
                    </nav>
                    {
                        user ?
                            <button onClick={handleLogOut} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">LogOut
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            :
                            <Link to={'/login'}>
                                <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">LogIn
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </Link>
                    }
                </div>
            </header>
        </div>
    );
};

export default Header;