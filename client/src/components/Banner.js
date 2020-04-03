import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Banner() {
  const { isAuthenticated } = useAuth0();
  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    getList();
  }, []);

  //Retrieves the list of items from the Express app
  function getList() {
    fetch('api/header')
      .then(res => res.json())
      .then(results => {
        setList(results);
        setIsLoaded(true);
        console.log(`length is ${results.length}`)
      })
  }


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

  //here the idea is that you only show the most recent item.
  const classes = useStyles();
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className={classes.banner}>
          <h1> {list[0].title}</h1>
          <h5>{list[0].subtitle}</h5>
          <br />
          <h3>{list[0].news_detail}</h3>
          <br />
        </div>
      </>
    );
  };
};
export default Banner;

/////
