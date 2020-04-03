import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import border_art from "../assets/images/camping_border.webp";
import { green } from "@material-ui/core/colors";

export default function AboveHeader() {
  const useStyles = makeStyles(theme => ({
    root: {
      
      backgroundImage: `url(${border_art})`,
      backgroundRepeat:'repeat-x',
      height:'150px',
      backgroundPosition: 'Bottom',
     
    },
    title: {
      
      //fontFamily: 'Anton, sans-serif',
      //textShadow: '4px 4px 4px #aaa',
      marginLeft:'40px',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Girl Scout Troop 1690</h1>
      
    </div>
  );
}
