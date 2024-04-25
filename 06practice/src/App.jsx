import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import { AuthProvider } from './Components/AuthProvider/AuthProvider1';
import LogIn from './Components/LogIn/LogIn';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          element: <RequireAuth />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/about",
              element: <div>About</div>,
            },
            {
              path: "/contact",
              element: <div>contact</div>,
            },
          ]
        },
        {
          path: "/login",
          element: <LogIn />,
        },
        {
          path: "/logo",
          element: <div>logo</div>,
        },


      ]
    },
  ])
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;