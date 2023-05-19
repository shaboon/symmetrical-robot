import React, { useState } from "react";

import Request from "../../components/Token/Request";
import WatchLists from "../../components/Token/WatchLists.tsx";
import Auth from "../../components/utils/auth";
import {
  useGetWatchlist,
  useAddMovieToWatchlist,
} from "../../hooks/watchlists.js";

import "./List.css";

export default function Lists() {
  const [newList, setNewList] = useState("");

  const { data, loading } = useGetWatchlist();

  function createList(e) {
    e.preventDefault();
    if (newList.trim() === "") {
      return alert("No List Name");
    }
  }

  if (Auth.loggedIn()) {
    if (loading) {
      return <div>Loading...</div>;
    }

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
              value={newList}
              onChange={(e) => setNewList(e.target.value)}
            ></input>
          </form>
        </div>
        <WatchLists watchLists={data} loading={loading} />
      </div>
    );
  } else {
    return <Request />;
  }
}
