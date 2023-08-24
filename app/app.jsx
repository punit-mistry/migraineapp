"use client";
import { Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";
import UseHeader from "./Components/User/Header";
import Calender from "./Components/Calender";
import Form from "./Components/Form";
import { useAuthContext } from "./context/index";
import { supabase } from "../supabase";
export default function App() {
  const { user } = useAuthContext();
  const [Events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const fetchEvents = async () => {
    try {
      let { data, error } = await supabase
        .from("Migraine")
        .select("*")
        .eq("user_id", user?.id);
      if (data) {
        setEvents(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [user]);
  return (
    <Container>
      <Grid>
        <UseHeader />
      </Grid>
      <Grid>
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
