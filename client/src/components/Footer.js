import { debugging } from '../globals';
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap",
      //margin: "30px"
      //backgroundColor: 'rgb(255, 230, 204)',
    },
  }, footer: {
    textAlign: 'left',
  }
}));




function Footer() {
  const { isAuthenticated } = useAuth0();
  const isAuthenticated2 = isAuthenticated || debugging;
  // const { loading, user } = useAuth0();

  // if (loading || !user) {
  //     return <div>Loading...</div>;
  //   }
  const classes = useStyles();
  return (
    <div className={classes.root}   >
      <div className={classes.footer}   >
        <p>Copyright 2020</p>

      </div>
    </div>
  );
};

export default Footer;

/////
