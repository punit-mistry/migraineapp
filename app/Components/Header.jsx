import React from "react";
import { Avatar, Grid, Button, Switch, FormControlLabel } from "@mui/material";
import { useRouter } from "next/navigation";
import Logo from "../../public/logo.png";
import Image from "next/image";
const Header = ({ switchTheme, user }) => {
  const router = useRouter();
  const getFirstLetter = () => {
    if (!user) return "G";
    return user.email[0].toUpperCase();
  };
  return (
    <Grid
      sx={{ p: 2 }}
      // className="border-b-4 border-black"
    >
      <Grid
        container
        direction="row"
        justifyContent={router.pathname === "/" ? "center" : "space-between"}
        alignItems="center"
      >
        <Grid
          item
          lg={6}
        >
          <Image
            src={Logo}
            width={50}
          />
        </Grid>
        <Grid
          xs={6}
          rowSpacing={1}
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          {user && (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <FormControlLabel
                control={
                  <Switch
                    onChange={switchTheme}
                    name="gilad"
                    color="default"
                  ></Switch>
                }
                label="Night Mode"
              />
              <Avatar
                className="pointer"
                onClick={() => router.push("/profile")}
                sx={{ width: 56, height: 56, backgroundColor: "blue" }}
              >
                {getFirstLetter()}
              </Avatar>{" "}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
