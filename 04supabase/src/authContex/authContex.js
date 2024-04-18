import { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://wgmqvzfwqziuerdymueh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnbXF2emZ3cXppdWVyZHltdWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzM5MTYsImV4cCI6MjAyODU0OTkxNn0.oXGjVZm6886-BS9FYXbjxuk8PrHMHUUke1cW5kBnvkU'
);
export const AuthContext = createContext({
  register: async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) throw error;
    console.log(user);
    console.log(error);
    return user;
  },
  logIn: async () => {},
  logOut: async () => {},
});
export const AuthProvider = AuthContext.Provider;
export const useAuth = () => {
  return useContext(AuthContext);
};
