import React from "react";

import Request from "../../components/Token/Request";
import WatchLists from "../../components/Token/WatchLists";

import Auth from "../../components/utils/auth";

import "./List.css";

// // import Standby from "../../components/Token/Standby";
// // import Login from "../../components/Token/Login";
// // import SignUp from "../../components/Token/SignUp";
// // import Profile from "../../components/Token/Profile";

export default function Lists() {
  // const httpLink = createHttpLink({
  //   uri: "/graphql",
  // });

  if (Auth.loggedIn()) {
    return (
      <div className="container mx-auto my-3">
        <Request />
        <div className="col-2">
          <button className="col-12 new" onClick={""}>
            Create New WatchList
          </button>
        </div>
        <WatchLists />
      </div>
    );
  } else {
    return <Request />;
  }
}
