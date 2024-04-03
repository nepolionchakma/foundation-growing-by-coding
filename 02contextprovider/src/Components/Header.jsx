import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "../../src/index.css";
import MyContex from './Context/myContex';

const Header = () => {

    const styleActive = ({ isActive, isPending, isTransitioning }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
        };
    }
    const { user } = useContext(MyContex);

    return (
        <div className='bg-slate-300 p-3 w-[1200px] mx-auto flex justify-between gap-3'>
            <div className='flex gap-3' id='link'>
                <NavLink to='/' style={styleActive}>Home</NavLink>
                <NavLink to={'/about'} style={styleActive}>About</NavLink>
                <NavLink to={'/login'} style={styleActive}>login</NavLink>
            </div>
            <div>{user.username}</div>
        </div>
    );
};

export default Header;