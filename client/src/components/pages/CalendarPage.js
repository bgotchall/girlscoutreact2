import {debugging} from '../../globals';
import React, { useEffect, useState } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";


export default function BigCalendar() {
  const { isAuthenticated } = useAuth0();
  const isAuthenticated2 = isAuthenticated || debugging;

  const [events, setEvents] = useState([]);
  // const { loading, user } = useAuth0();

  // if (loading || !user) {
  //     return <div>Loading...</div>;
  //   }


  function getEvents(callback) {
    const events = []
    const events_data = [
      {
        title: "first",
        start: "2020-04-03 08:00:00",
        end: "2020-04-03 09:00:00",
        allDay: false,
        resource: "",
      },
      {
        title: "Second",
        start: "2020-04-13 10:00:00",
        end: "2020-04-13 11:00:00",
        allDay: false,
        resource: "",
      }
    ]

    events_data.map((event) => {
      events.push({
        start: event.start,
        end: event.end,
        title: event.title,
      })
    })
    setEvents(events)
  }




  // Load all events and store them with setEvents
  useEffect(() => {
    console.log("big calendar load happened");
    getEvents();
  }, []);

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap"
    },
    headlineLink: {
      textAlign: "left",
      fontSize: '2.5rem',
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji',
      marginBottom: '.5rem',
      fontWeight: '1100',
      lineHeight: '1.2',
      color: 'rgba(0, 0, 0, 0.54)',
    }
  }));

  const classes = useStyles();
  const localizer = momentLocalizer(moment);

  return (
    <>
      {isAuthenticated2 && (
        <div>
          <div className={classes.newstext}>
            <h1 className={classes.headlineLink}>CALENDAR</h1>
            <hr />
            <Calendar
              localizer={localizer}
              style={{ height: "820px" , margin: "50px"}}
              events={events}
            />
          </div>
        </div>
      )}
      {!isAuthenticated2 && (
        <h1> Calendar page Please Log in. This should never be seen</h1>
      )}
    </>
  );
};



/////
