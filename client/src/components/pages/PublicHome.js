import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "../../react-auth0-spa";

const PublicHome = () => {
  const { loginWithRedirect } = useAuth0();

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();

  return (
    <>
      <h1>Welcome to Central Texas Girl Scouts Troop 1690 Home page.</h1>
      <h3>Members and parents sign up here:</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={() => loginWithRedirect({})}
      >
        Sign up!
      </Button>
      
    </>
  );
};

export default PublicHome;

/////


