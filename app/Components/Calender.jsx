"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Alert, AlertTitle, Button, Grid } from "@mui/material";
const Calender = ({ events, setOpen }) => {
  let year = dayjs().subtract(365, "days").format("YYYY-MM-DD");
  const formattedEvents = events
    ? events.map((event) => ({
        ...event,
        date: dayjs(event.date).format("YYYY-MM-DD"),
      }))
    : [];

  return (
    <Grid
      item
      className="Calendar border shadow-xl shadow-blue-100"
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
        values={formattedEvents.map((event) => ({
          date: event.date,
          count: event.Pain_count, // Each event contributes a count of 1
        }))}
      />

      <Alert severity="info">
        <AlertTitle>Footer</AlertTitle>
        <span>This is the Footer</span>
      </Alert>
    </Grid>
  );
};

export default Calender;
