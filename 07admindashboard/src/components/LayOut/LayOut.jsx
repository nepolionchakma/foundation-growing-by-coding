
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Dashboard from "../Body/Dashboard/Dashboard"
import Activity from "../Body/Activity/Activity"
import Analytics from "../Body/Analytics/Analytics"
import Transactions from "../Body/Transactions/Transactions"
import Help from "../Body/Help/Help"
import AddPost from "../Body/AddPost/AddPost"
import LogIn from "../Body/LogIn/LogIn"
import { PostProvider } from "@/Contexts/PostContext"
import InviteUser from "../InviteUser/InviteUser"

function LayOut() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/LogIn',
          element: <LogIn />
        },

        {
          path: '/AddPost',
          element: <AddPost />
        },
        {
          path: '/Activity',
          element: <Activity />
        },
        {
          path: '/Analytics',
          element: <Analytics />
        },
        {
          path: '/Transactions',
          element: <Transactions />
        },
        {
          path: '/Help',
          element: <Help />
        },
      ]
    },
    {
      path: '/InvitedUser',
      element: <InviteUser />
    },
  ])
  return (

    <RouterProvider router={router} />
  )
}
export default LayOut