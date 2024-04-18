import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom'
import LayOut from './LayOut/LayOut.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import LogIn from './Components/LogIn/LogIn.jsx'
import { AuthProvider, supabase } from './AuthContext/AuthContext.js'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  // console.log(user)
  useEffect(() => {
    // get session
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);
    setLoading(false);

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);



  const register = async (fullName, email, password) => {
    try {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName,
          }
        }
      })
      // if (error) console.log(error)
      return data;

    } catch (error) {
      // console.log(error)
    }
  }
  const logIn = async (email, password) => {
    try {
      let error = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      throw error

    } catch (error) {
      setError(error)
    }
  }
  const logOut = async () => {
    let { error } = await supabase.auth.signOut()
    // console.log(error)
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayOut />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<LogIn />} />
      </Route>
    )
  )
  return (
    <AuthProvider value={{ register, logIn, user, logOut, error }}>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
