import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserInfoContext } from "../../App";

const PrivateRouter = ({ children, ...rest }) => {
  const user = useContext(UserInfoContext);
  const { userInfo } = user;
  //   console.log(userInfo.email.legnth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userInfo.islogin === true && userInfo.email.length > 0 ? (
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

export default PrivateRouter;
