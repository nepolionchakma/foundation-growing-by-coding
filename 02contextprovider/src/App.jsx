
import './App.css';
import RootHome from "./Components/RootHome";
import Home from "./Components/Home";
import Login from "./Components/Login";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import ContexProvider from './Components/Context/ContexProvider';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootHome></RootHome>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/login",
          element: <Login>login</Login>,
        },
        {
          path: "about",
          element: <div>About</div>,
        },

      ]
    },

  ]);

  return (
    <ContexProvider>
      <RouterProvider router={router} />
    </ContexProvider>
  )
}

export default App
