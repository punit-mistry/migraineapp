"use client";
import { Grid, Container } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import UseHeader from "./Components/User/Header";
import Calender from "./Components/Calender";
import Form from "./Components/Form";
export default function App() {
  const [Events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Grid>
        {" "}
        <UseHeader />{" "}
      </Grid>
      <Grid>
        {" "}
        {!open && (
          <Calender
            events={Events}
            setOpen={setOpen}
          />
        )}
        {open && (
          <Form
            setEvents={setEvents}
            setOpen={setOpen}
          />
        )}
      </Grid>
    </Container>
  );
}
