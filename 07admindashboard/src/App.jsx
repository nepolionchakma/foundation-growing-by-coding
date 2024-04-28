import './App.css'
import { useMyContext } from './Contexts/MyContext'
import LogIn from './components/Body/LogIn/LogIn'
import InviteUser from './components/InviteUser/InviteUser'
import LayOut from './components/LayOut/LayOut'

function App() {
  const { session, loading } = useMyContext()

  if (loading) return (
    <div
      className='flex items-center justify-center'>
      <img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="" />
    </div>
  )

  if (session) return <LayOut />

  return <LogIn />

}

export default App
