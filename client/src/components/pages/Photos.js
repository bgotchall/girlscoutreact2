// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-spa";


const Photos = () => {
    const {  isAuthenticated } = useAuth0();

    // const { loading, user } = useAuth0();

    // if (loading || !user) {
    //     return <div>Loading...</div>;
    //   }

    return (
        <>
            {isAuthenticated && (<h1> Photos page Logged in Content </h1>)}
            {!isAuthenticated && (<h1> Photos page Please Log in </h1>)}
        </>
    );
};

export default Photos;


/////


