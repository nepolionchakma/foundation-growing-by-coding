import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import { useNavigate, useParams } from 'react-router-dom';
export const supabase = createClient(
  'https://wgmqvzfwqziuerdymueh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnbXF2emZ3cXppdWVyZHltdWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzM5MTYsImV4cCI6MjAyODU0OTkxNn0.oXGjVZm6886-BS9FYXbjxuk8PrHMHUUke1cW5kBnvkU'
);
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [session, setSession] = useState('')
  useEffect(() => {
    // get session
    // const session = supabase.auth.getSession();
    // setUser(session?.user ?? null);
    // console.log(session, 'san2')
    // setLoading(false);

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session);
      setSession(session)
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
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      return data

    } catch (error) {
      setError(error)
    }
  }
  const logOut = async () => {
    let { error } = await supabase.auth.signOut()
    // console.log(error)
  }

  const value = {
    register, logIn, logOut, user, loading, error, session
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}