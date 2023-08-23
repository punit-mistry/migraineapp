"use client";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "../../supabase";

const AuthContext = createContext({});
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const onAuthChange = async () => {
    console.log("Auth change");
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      console.log(user, error);
      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    onAuthChange();
  }, []);
  <AuthContext.Provider value={{ user }}>{Children}</AuthContext.Provider>;
};

export const useAuthContext = async;
