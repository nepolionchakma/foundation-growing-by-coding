import { createClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import conf from "./conf";
export const supabase = createClient(conf.supabaseUrl, conf.supabaseKey);

const MyContext = createContext([
  {
    updateUser: (email, password) => { },
    postUpdate: (id, title, paragraph) => { },
  }
]);
export const useMyContext = () => useContext(MyContext)

export const MyProvider = ({ children }) => {
  const [allPostData, setAllPostData] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [session, setSession] = useState('')
  useEffect(() => {

    // Authentication Section
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session)
        setLoading(false);
      })
    const { data: { subscription }, } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false);
    })
    return () => subscription.unsubscribe()



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
  const post = async (title, paragraph) => {
    const { error } = await supabase
      .from('posts')
      .insert({
        full_name: session.user.user_metadata.full_name,
        email: session.user.user_metadata.email,
        title: title,
        paragraph: paragraph,
      })
  }
  const updateUser = async (password) => {
    const { data, error } = await supabase.auth.updateUser({


      password: password,
      // options: {
      //   data: {
      //     full_name: fullname,
      //   },
      // },
    })
    return data
  }
  const postUpdate = async (id, title, paragraph) => {

    const { error } = await supabase
      .from('posts')
      .update({ title: title, paragraph: paragraph })
      .eq('id', id)
    if (error) throw error
  }

  const value = {
    register, logIn, logOut, updateUser, loading, error, session, post, postUpdate
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
