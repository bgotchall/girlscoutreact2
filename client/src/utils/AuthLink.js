import {debugging} from '../globals';
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";



const AuthLink = (props) => {
    const { loading, user, isAuthenticated } = useAuth0();
    const isAuthenticated2 =  isAuthenticated|| debugging;
    const location = useLocation();

    return (
        <>
        {isAuthenticated2 && (
            < Link to={props.route} className={location.pathname ===props.route ? "nav-link active" : "nav-link"} >
            {props.name}
        </Link >
        )}
        </>
    )      
   
};
const useStyles = makeStyles(theme => ({
    
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

const AuthLinkH1Format = (props) => {
    const { loading, user, isAuthenticated } = useAuth0();
    const isAuthenticated2 =  isAuthenticated|| debugging;
    const location = useLocation();
    const classes = useStyles();

    return (
        <>
        {isAuthenticated2 && (
            < Link className={classes.headlineLink} to={props.route}  >
            {props.name}
        </Link >
        )}
        </>
    )      
   
};

export {AuthLinkH1Format};
export default AuthLink;
