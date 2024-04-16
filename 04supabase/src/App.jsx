import React, { useEffect, useState } from 'react';
import { AuthProvider } from './authContex/authContex';
import Register from './Register';
import { supabase } from './authContex/authContex';
import LogIn from './LogIn';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get session
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);
    setLoading(false);

    // get user 
    // const getuser = async () => {
    //   const { data: { user } } = await supabase.auth.getUser();
    //   // console.log(data, 'data', user.aud === "authenticated", 'user')
    // }
    // getuser();
    // user if auth change
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);
  console.log(!user)
  console.log(user)
  const register = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: 'John',
        }
      }
    })
    if (error) throw error;
    return user;
  }
  const logIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) throw error;
    return data;
  }
  const handleLogOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <AuthProvider value={{ register, logIn, user }}>

      {
        user ? <div>
          <h4> welcome {user?.user_metadata.full_name}</h4>
          <button onClick={handleLogOut}>LogOut</button>
        </div> :
          <div>
            <Register />
            <LogIn />
            please login

          </div>
      }
    </AuthProvider>
  );
};

export default App;