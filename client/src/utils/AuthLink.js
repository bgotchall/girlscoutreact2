import {debugging} from '../globals';
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link, useLocation } from "react-router-dom";



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

export default AuthLink;