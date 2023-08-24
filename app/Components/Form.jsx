// @ts-nocheck

"use client";
import dayjs, { Dayjs } from "dayjs";
import config from "@/config"; // Import de Dayjs et son type Dayjs
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Slider,
  Stack,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LoadingButton } from "@mui/lab";
import { supabase } from "../../supabase";
import { useAuthContext } from "@/app/context";
import { GrClose } from "react-icons/gr";
export default function Form({ setEvents, setOpen }) {
  const { user } = useAuthContext();

  console.log(user);
  const [loading, setLoading] = useState(false); // Ajout du type boolean
  const [error, setError] = useState(null); // Ajout du type string | null
  const [event, setEvent] = useState({
    user_id: "",
    date: "",
    duration: 1,
    locations: [],
    symptomes: [],
    medications: [],
    Pain_count: 0,
    update_At: "",
  });

  const handleChange = (index, key) => {
    if (event[key].includes(index)) {
      setEvent((prevState) => ({
        ...prevState,
        [key]: prevState[key].filter((x) => x !== index),
      }));
      return;
    }
    setEvent((prevState) => ({
      ...prevState,
      [key]: [...prevState[key], index],
    }));
  };

  const saveEvent = async () => {
    setError(null);
    setLoading(true);
    if (!event.date) {
      setError("You must provide a date.");
      return;
    }
    try {
      // var Date = new Date();
      const newEvent = {
        ...event,
        update_At: dayjs(new Date()).format(),
        user_id: user.id,
      };
      console.log(newEvent);
      // const { data, error } = await supabase
      //   .from("events")
      //   .insert(newEvent);
      const { data, error } = await supabase
        .from("Migraine")
        .insert(newEvent)
        .select();
      // setOpen(false);
      // setEvents((prevEvents) => [...prevEvents, newEvent]);
      if (data) {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
        setOpen(false);
      }
      console.log(data, error);
    } catch (error) {
      console.log(error);
      setError("Error inserting event Please fill all the Details !!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setEvent((prevState) => ({
      // Utilisation de prevState
      ...prevState,
      date: dayjs().format(), // Formatage de la date avec Dayjs
    }));
  }, []);

  return (
    <Card
      variant="outlined"
      className="shadow-xl"
      sx={{ minWidth: 275, maxWidth: 600, mx: "auto", px: 2, py: 1, my: 2 }}
    >
      <CardContent>
        <Grid
          sx={{ mb: 3 }}
          className="flex justify-between"
        >
          <h2>Add a new crisis</h2>
          <button onClick={() => setOpen(false)}>
            <GrClose />
          </button>
        </Grid>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            xs={12}
          >
            <p>When was that migraine?</p>
            <DateTimePicker
              label="Date & time"
              onChange={(newValue) =>
                setEvent({
                  ...event,
                  date: dayjs(newValue.toString()).format(),
                })
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <p>How long did it last?</p>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <span>0</span>
              <Slider
                defaultValue={1}
                step={1}
                min={0}
                max={72}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  const inputElement = e.target;
                  setEvent({
                    ...event,
                    duration: parseInt(inputElement.value),
                  });
                }}
              />
              <span>72h</span>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <p>Evaluate your pain (from 0 to 10)</p>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <span>0</span>
              <Slider
                defaultValue={1}
                step={1}
                marks
                min={0}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  const inputElement = e.target;
                  setEvent({
                    ...event,
                    Pain_count: parseInt(inputElement.value),
                  });
                }}
              />
              <span>10</span>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <p>Symptomes</p>
            <Grid>
              {config.symptomes.map((x, y) => (
                <FormControlLabel
                  key={y}
                  control={
                    <Checkbox
                      name={x}
                      checked={event.symptomes.includes(y)}
                      onChange={() => handleChange(y, "symptomes")}
                    />
                  }
                  label={x}
                />
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <p>Location</p>
            <Grid>
              {config.locations.map((x, y) => (
                <FormControlLabel
                  key={y}
                  control={
                    <Checkbox
                      name={x}
                      checked={event.locations.includes(y)}
                      onChange={() => handleChange(y, "locations")}
                    />
                  }
                  label={x}
                />
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <p>Medications</p>
            <Grid>
              {config.medications.map((x, y) => (
                <FormControlLabel
                  key={y}
                  control={
                    <Checkbox
                      name={x}
                      checked={event.medications.includes(y)}
                      onChange={() => handleChange(y, "medications")}
                    />
                  }
                  label={x}
                />
              ))}
            </Grid>
          </Grid>
          {error && (
            <Grid
              item
              xs={12}
            >
              <Alert
                severity="error"
                color="error"
              >
                {error || "Error"}
              </Alert>
            </Grid>
          )}
          <Grid
            item
            xs={12}
          >
            <Button
              disabled={loading}
              style={{ marginRight: "6px" }}
              variant="outlined"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              disabled={loading}
              variant="contained"
              color="primary"
              className="bg-blue-600"
              onClick={saveEvent}
            >
              Save
            </Button>
            {loading && <LoadingButton loading />}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
