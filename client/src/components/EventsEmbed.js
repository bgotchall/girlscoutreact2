import React, { useEffect, useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import moment from 'moment';
import {AuthLinkH1Format} from "../utils/AuthLink";

function EventsEmbed() {
  const { isAuthenticated } = useAuth0();
  const [events, setEvents] = useState([]);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  //
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap"
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: " offwhite"
    },
    contentContainer: {
      margin: "30px"
    },
    banner: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      color: "white",
      height: "302px",
      backgroundColor: " rgba(0, 174, 88,50)"
    },
    newstext: {
      textAlign: "left",
    },
    headlineLink: {
      textAlign: "center",
      fontSize: '2.5rem',
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji',
      marginBottom: '.5rem',
      fontWeight: '1100',
      lineHeight: '1.2',
      color: 'rgba(0, 0, 0, 0.54)',
    }
  }));

  const classes = useStyles();

  useEffect(() => {
    // Update the document title using the browser API
    getList();
    setTitle("");
  }, []);

  //Retrieves the list of items from the Express app
  function getList() {
    fetch('api/calendar5')
      .then(res => res.json())
      .then(results => {
        setList(results);
        console.log(`length is ${results.length}`)
      })
  }

  function getEvents() {
    let temp_events = []
    //Retrieves the list of items from the Express app
    console.log(`starting the events fetch`);
    fetch('api/calendar')
      .then(res => res.json())
      .then(results => {
        setList(results);
        //setIsLoaded(true);
        console.log(`length is ${results.length}`);
        console.log(`data is ${JSON.stringify(results)}`);
        results.map((item) => {
          temp_events.push({
            title: item.title,
            start: item.start,
            end: item.end
          })
        })
        setEvents(temp_events)
      })
  }

  function getFormattedDate(dateStart, dateEnd) {
    // if the dates are the same, return one date.
    // if the dates are not the same, return "Feb 3-4"

    dateStart = moment(dateStart).format("MMM Do YY");
    dateEnd = moment(dateEnd).format("MMM Do YY");

    if (dateStart === dateEnd) {
      return (dateStart);
    } else {
      return (dateStart +" to "+ dateEnd);

    }

  }


  return (
    <>
     <AuthLinkH1Format name="EVENTS" route="/manageevents">EVENTS</AuthLinkH1Format>
    
      <div className={classes.newstext}>
        <hr />
        {list.map((item) => {
          return (
            <div>
               <h5>{getFormattedDate(item.start, item.end)}:</h5>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <hr />
            </div>
          );
        })}

      </div>
    </>
  );
};

export default EventsEmbed;

/////
