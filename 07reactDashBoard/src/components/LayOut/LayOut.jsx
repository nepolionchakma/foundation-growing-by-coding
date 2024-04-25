
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Dashboard from "../Body/Dashboard/Dashboard"
import Activity from "../Body/Activity/Activity"
import Analytics from "../Body/Analytics/Analytics"
import Transactions from "../Body/Transactions/Transactions"
import Help from "../Body/Help/Help"
import AddUser from "../Body/AddUser/AddUser"

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
          path: '/AddUser',
          element: <AddUser />
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
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
export default LayOut