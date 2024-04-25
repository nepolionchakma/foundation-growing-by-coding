import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';


const RequireAuth = () => {
  const { session, user, loading } = useAuth()
  const location = useLocation()

  // working 1 //
  if (loading) return 'loading........................................'
  if (user) return <Outlet />
  return <Navigate to='/logIn' state={{ from: location }} replace />

  // working 2 also//
  // return (
  //     session == null ?
  //         <Navigate to='/logIn' state={{ from: location }} replace />
  //         :
  //         <Outlet />
  // );
};

export default RequireAuth;