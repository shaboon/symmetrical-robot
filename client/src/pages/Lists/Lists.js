import React from "react";

import Request from "../../components/Token/Request";
import WatchLists from "../../components/Token/WatchLists";

import Auth from "../../components/utils/auth";

import "./List.css";

export default function Lists() {
  function createList() {
    console.log("Create List");
  }

  if (Auth.loggedIn()) {
    return (
      <div className="container mx-auto my-3">
        <Request />
        <div className="col-2">
          <button className="col-12 new btn btn-secondary" onClick={createList}>
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
