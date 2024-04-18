import { useContext, createContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import conf from './conf';

export const supabase = createClient(conf.supabaseUrl, conf.supabaseKey);

export const AuthContext = createContext();
export const AuthProvider = AuthContext.Provider;
export const useAuth = () => useContext(AuthContext);
