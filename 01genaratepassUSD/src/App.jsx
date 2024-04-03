import { useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './App.css';
import Contact from './Components/Contact/Contact';
import Root from './Components/Home/Root';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Generatepassword from './Components/Generatepassword/Generatepassword';
import InputBox from './Components/Input/InputBox';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count <= 5) {
      setCount(count + 1);

    }
  }
  const handleClickRemove = () => {
    if (!count <= 0) {
      setCount(count - 1);

    }
    console.log("ick");
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root count={count} />,
      children: [
        {
          path: "",
          element: <Home count={count} handleClick={handleClick} handleClickRemove={handleClickRemove}></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/generatepassword",
          element: <Generatepassword></Generatepassword>
        },
        {
          path: "/inputbox",
          element: <InputBox></InputBox>
        },
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
