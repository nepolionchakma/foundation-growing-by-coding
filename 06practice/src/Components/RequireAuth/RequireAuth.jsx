import React from 'react';
import { useAuth } from '../AuthProvider/AuthProvider1';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
    const { user } = useAuth()
    const location = useLocation()
    return (
        <div>
            {
                user ?
                    <Outlet />
                    :
                    <Navigate to='/logIn' state={{ from: location }} replace />
            }
        </div>
    );
};

export default RequireAuth;