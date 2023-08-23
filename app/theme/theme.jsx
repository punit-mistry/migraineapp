"use client";
import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1F6FFF",
    },
  },
});
export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1F6FFF" },
  },
});
