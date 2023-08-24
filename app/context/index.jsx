"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { supabase } from "../../supabase";
import Landing from "../Components/Landing";
import Header from "../Components/Header";
const AuthContext = createContext({});

export const AuthContextProvider = ({ children, SwitchTheme }) => {
  const [user, setUser] = useState(false);
  const onAuthStateChange = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session && session.user) {
        setUser(session.user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChange();
  }, []);

  const value = useMemo(() => {
    return {
      user,
    };
  }, [user]);

  return (
    <AuthContext.Provider value={value}>
      <Header
        switchTheme={SwitchTheme}
        user={user}
      />
      {user ? children : <Landing />}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const { user } = useContext(AuthContext);
  return { user };
};
