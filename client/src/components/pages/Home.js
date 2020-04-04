import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Carousel from "./Carousel";
import News from '../News';
import CalendarEmbed from '../CalendarEmbed';
import EventsEmbed from '../EventsEmbed';
import Banner from '../Banner';
import Button from "@material-ui/core/Button";

const debug = true;
export default function Home() {
  const { isAuthenticated_real, loginWithRedirect,logout } = useAuth0();

  const isAuthenticated =  isAuthenticated_real|| debug;
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: 'rgb(255, 230, 204)',
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
    }
  }));

  const classes = useStyles();
             
  if (!isAuthenticated) {
    return (
      <>
      <Grid container spacing={3}>
        <Grid container className={classes.contentContainer} item xs={12}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <Carousel />
            </Paper>
          </Grid>

          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <h1>Central Texas Girl Scout troup 1690</h1>
              <h5>Members and Parents please sign up or log in!</h5>{!isAuthenticated && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => loginWithRedirect({})}
            >
              Sign up
            </Button>
          )}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      </>
    )
  } else {

    return (
      <>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid container className={classes.contentContainer} item xs={12}>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <Carousel />
                </Paper>
              </Grid>

              <Grid item xs={7}>
                <Paper className={classes.paper}>
                  <Banner />
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <News />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <CalendarEmbed />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <EventsEmbed />
                </Paper>
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
}

/////
