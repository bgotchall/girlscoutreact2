// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Carousel from './Carousel';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
    flexWrap: 'wrap',
    

    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor:' rgba(0, 174, 88,50)',
    },
    contentContainer: {
        margin: '30px',
        backgroundColor: 'red',
    },
  }));

  const classes = useStyles();

  return (
    <>
      {/* {isAuthenticated && <h1> Welcome! </h1>   //ugly} */}   
      {!isAuthenticated && (
        <h1> Home page Please Log in. This should never be seen</h1>
      )}

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container  className={classes.contentContainer} item xs={12}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
               <Carousel />
              <h1> Introductory Title!</h1>
              <h3> Some other information.</h3>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>News Column</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Calendar column</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Upcoming events column</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>chat function</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>footer</Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;

/////
