import { Children, createContext, useContext } from "react";
import conf from "./conf";
import { useMyContext } from "./MyContext";
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(conf.supabaseUrl, conf.supabaseKey)
export const PostContext = createContext()
export const usePost = () => useContext(PostContext)
export const PostProvider = ({ Children }) => {
  const { session } = useMyContext()
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
  const value = {
    post
  }
  return (
    <PostContext.Provider value={value}>
      {Children}
    </PostContext.Provider>
  )
}