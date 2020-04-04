import {debugging} from '../globals';
import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {AuthLinkH1Format} from "../utils/AuthLink";

export default function News() {
  const { isAuthenticated } = useAuth0();
  const isAuthenticated2 =  isAuthenticated|| debugging;
  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    getList();
  }, []);

  //Retrieves the list of items from the Express app
  function getList() {
    fetch('api/news5')
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
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (

      <div>
        
        <AuthLinkH1Format name="NEWS" route="/newspage">NEWS</AuthLinkH1Format>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div className={classes.newstext}>
            {/* Render the list of items */}
            {list.map((item) => {
              return (
                <div>
                   <hr />
                  <p>{item.newsDate}</p>
                  <h5>{item.title}</h5>
                  <p>{item.news_detail}</p>
                 
                </div>
              );
            })}
          </div>
        ) : (
            <div>
              <h2>No List Items Found</h2>
            </div>
          )
        }
      </div>






    );
  };
};