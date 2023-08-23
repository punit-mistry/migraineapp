import React from "react";
import { Grid, Avatar } from "@mui/material";
const UseHeader = () => {
  return (
    <Grid
      sx={{ my: 6 }}
      container
      alignItems="center"
    >
      <Grid
        item
        sx={{ mr: 4 }}
      >
        {/* <AvatarComponent size={"big"} /> */}
        <Avatar
          className="pointer"
          onClick={() => router.push("/profile")}
          sx={{ width: 90, height: 90, backgroundColor: "red" }}
        >
          G
        </Avatar>
      </Grid>
      {/* {user && ( */}
      <Grid item>
        <h1 className="font-bold text-2xl">Punit </h1>
        <p
          style={{ marginBottom: "12px" }}
          className="text-xs"
        >
          Punitmistr@gmail.com
        </p>
        {/* <Button className="info border" >
              Signout
            </Button> */}
      </Grid>
      {/* )} */}
    </Grid>
  );
};

export default UseHeader;
