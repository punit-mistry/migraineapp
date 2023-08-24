"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/supabase";
const Login = () => {
  const [error, setError] = useState(false);
  const [UserData, setUserData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  }, []);

  const Login = async () => {
    console.log(UserData);
    let { data, error } = await supabase.auth.signUp({
      email: UserData.email,
      password: UserData.password,
    });
    console.log(data, error);
  };

  return (
    <>
      <div className="flex gap-10 justify-center items-center h-[100vh] flex-col ">
        {error && (
          <div className="w-96 bg-red-100 h-10 border-2 border-red-600 flex items-center p-3 rounded-md">
            Please SignUp !!
          </div>
        )}

        <div className="shadow-2xl shadow-black h-[45vh] w-96 p-10 flex flex-col gap-11 rounded-2xl">
          <div className="font-bold text-5xl ">Singup </div>
          <div className="flex flex-col gap-5">
            <input
              type="email"
              value={UserData.email}
              onChange={(e) =>
                setUserData({ ...UserData, email: e.target.value })
              }
              className="border-2 border-b-black border-transparent focus:outline-none p-2 "
              placeholder="Enter your Email "
            />
            <input
              type="password"
              value={UserData.password}
              onChange={(e) =>
                setUserData({ ...UserData, password: e.target.value })
              }
              className="border-2 border-b-black border-transparent focus:outline-none p-2 "
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              onClick={Login}
              className="hover:bg-black hover:text-white w-32 h-10 transition-all"
            >
              SignUp
            </button>
          </div>
          <button className="hover:underline">
            <Link href="/">Already have an Account?</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
