import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

function Example()  {
  const { isAuthenticated } = useAuth0();

  // const { loading, user } = useAuth0();

  // if (loading || !user) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <>
      {isAuthenticated && (
        <div>
          <h1> Example page Secret Content </h1>
          <p> more content is allowed?</p>
        </div>
      )}
      {!isAuthenticated && (
        <h1> Example page Please Log in. This should never be seen</h1>
      )}
    </>
  );
};

export default Example;

/////
