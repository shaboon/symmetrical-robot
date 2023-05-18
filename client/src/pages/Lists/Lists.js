import React, { useState } from "react";

import Request from "../../components/Token/Request";
import WatchLists from "../../components/Token/WatchLists";

import Auth from "../../components/utils/auth";

import "./List.css";

export default function Lists() {
  const [newList, setNewList] = useState();

  function createList(e) {
    e.preventDefault();
    if ((newList === "") | (newList === undefined)) {
      return alert("No List Name");
    }

    console.log("Create List");
    console.log(newList);
  }

  if (Auth.loggedIn()) {
    return (
      <div className="container mx-auto my-3">
        <Request />
        <div className="col-12">
          <form className="col-12">
            <button
              className="col-3 new btn btn-secondary"
              onClick={createList}
            >
              Create New WatchList
            </button>
            <input
              className="col-9 newList"
              placeholder="Name of WatchList"
              onChange={(e) => setNewList(e.target.value)}
            ></input>
          </form>
        </div>
        <WatchLists />
      </div>
    );
  } else {
    return <Request />;
  }
}
