import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from './../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  // const { user } = useAuth();
  console.log(useAuth());
  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
