import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function EventsEmbed() {
  const { isAuthenticated } = useAuth0();
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
      textAlign:"left",

    }
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.newstext}>
        <h1>UPCOMING EVENTS</h1>
        <p>March 1</p>
        <h5>Troop 1690 camping trip</h5>
        <p>
          The girls went camping and had so much fun! Click here to see pictures
        </p>
        <hr></hr>
        <p>March 1</p>
        <h5>Troop 1690 camping trip</h5>
        <p>
          The girls went camping and had so much fun! Click here to see pictures
        </p>
        <hr></hr>
        <p>March 1</p>
        <h5>Troop 1690 camping trip</h5>
        <p>
          The girls went camping and had so much fun! Click here to see pictures
        </p>
        
      </div>
    </>
  );
};

export default EventsEmbed;

/////
