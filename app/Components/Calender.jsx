"use client";
import React from "react";
import dayjs from "dayjs";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Alert, AlertTitle, Button, Grid } from "@mui/material";
const Calender = ({ events, setOpen }) => {
  let year = dayjs().subtract(365, "days").format("YYYY-MM-DD");
  console.log("this is the calender Events", events);
  const formattedEvents = events
    ? events.map((event) => ({
        ...event,
        date: dayjs(event.date).format("YYYY-MM-DD"),
      }))
    : [];
  return (
    <Grid
      item
      className="Calendar border"
      sx={{ p: 4 }}
    >
      <Grid
        direction="row"
        container
        item
        justifyContent="space-between"
        alignItems="center"
        justifyItems="center"
        sx={{ mb: 4 }}
      >
        <h2>Migraine</h2>
        <Button
          className="info"
          variant="outlined"
          onClick={() => setOpen(true)}
        >
          New
        </Button>
      </Grid>
      <CalendarHeatmap
        startDate={year}
        showWeekdayLabels
        values={formattedEvents}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `primary opacity-${value.count}`;
        }}
      />
      <Alert severity="info">
        <AlertTitle>Bêta</AlertTitle>
        <span>
          Migrainedata.app is currently in bêta; more is coming about reports
          for your migraines.
        </span>
      </Alert>
    </Grid>
  );
};

export default Calender;
