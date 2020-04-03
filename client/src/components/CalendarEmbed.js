import React, { useEffect, useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import { getEvents } from "./gcal";

function CalendarEmbed() {
  //state stuff:
  const [events, setEvents] = useState([]);

  // Load all events and store them with setEvents
  useEffect(() => {
      console.log("useeffect happened");
    getEvents();
  }, []);

  const { isAuthenticated } = useAuth0();

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap"
    }
  }));

  const classes = useStyles();
  const localizer = momentLocalizer(moment);

  return (
    <>
      <div className={classes.newstext}>
        <h1>CALENDAR</h1>
        <Calendar
          localizer={localizer}
          style={{ height: "420px" }}
          events={events}
        />
      </div>
    </>
  );
}

export default CalendarEmbed;

/////
