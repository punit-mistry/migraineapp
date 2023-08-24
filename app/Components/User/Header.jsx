import React from "react";
import { Grid, Avatar } from "@mui/material";
import { useAuthContext } from "@/app/context";
import { supabase } from "@/supabase";
const UseHeader = () => {
  const { user } = useAuthContext();
  const GetFirstName = () => {
    if (!user) return "G";
    return user.email[0].toUpperCase();
  };
  const Logout = async () => {
    let { error } = await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <Grid
      sx={{ my: 6 }}
      container
      alignItems="center"
      className="shadow-2xl p-10 rounded-xl flex justify-between"
    >
      <Grid
        item
        sx={{ mr: 4 }}
      >
        {/* <AvatarComponent size={"big"} /> */}
        <Avatar
          className="pointer"
          onClick={() => router.push("/profile")}
          sx={{ width: 90, height: 90, backgroundColor: "blue" }}
        >
          {GetFirstName()}
        </Avatar>
      </Grid>
      {/* {user && ( */}
      <Grid className=" w-52">
        <h1 className="font-bold text-2xl">Punit </h1>
        <p
          style={{ marginBottom: "12px" }}
          className="text-xs"
        >
          {user?.email || ""}
        </p>
        <button
          className="bg-blue-500 w-28 h-10 text-white hover:bg-blue-700 transition-all"
          onClick={Logout}
        >
          Signout
        </button>
      </Grid>
      {/* )} */}
    </Grid>
  );
};

export default UseHeader;
