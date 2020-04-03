// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const Calendar = () => {
  const { isAuthenticated } = useAuth0();

  // const { loading, user } = useAuth0();

  // if (loading || !user) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <>
      {isAuthenticated && (
        <div>
          <h1> Calendar page Secret Content </h1>
          <p> more content is allowed?</p>
        </div>
      )}
      {!isAuthenticated && (
        <h1> Calendar page Please Log in. This should never be seen</h1>
      )}
    </>
  );
};

export default Calendar;

/////
