import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import { AuthProvider } from './Components/AuthProvider/AuthProvider1';
import LogIn from './Components/LogIn/LogIn';
import RequireAuth from './Components/RequireAuth/RequireAuth';

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