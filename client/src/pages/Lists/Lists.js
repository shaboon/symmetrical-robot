import React from "react";

import Request from "../../components/Token/Request";
import WatchLists from "../../components/Token/WatchLists";

import Auth from "../../components/utils/auth";

// // import Standby from "../../components/Token/Standby";
// // import Login from "../../components/Token/Login";
// // import SignUp from "../../components/Token/SignUp";
// // import Profile from "../../components/Token/Profile";

export default function Lists() {
  //   const httpLink = createHttpLink({
  //     uri: "/graphql",
  //   });
  if (Auth.loggedIn()) {
    return <WatchLists />;
  } else {
    return <Request />;
  }
}
