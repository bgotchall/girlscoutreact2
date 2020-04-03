import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Banner() {
  const { isAuthenticated } = useAuth0();

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap"
    },
    banner: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      //color: "black",
      height: "347px"
      //backgroundColor: " rgba(0, 174, 88,50)",
    }
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.banner}>
        <h1> Introductory Title!</h1>
        <br />
        <h3> Some other information.</h3>
        <br />
      </div>
    </>
  );
}

export default Banner;

/////
