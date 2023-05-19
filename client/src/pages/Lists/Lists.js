import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_MOVIE_TO_WATCHLIST, QUERY_WATCHLISTS } from "../utils/queries";

import Request from "../../components/Token/Request";
import WatchLists from "../../components/Token/WatchLists";

import Auth from "../../components/utils/auth";

import "./List.css";

export default function Lists() {
  const [newList, setNewList] = useState("");

  const { loading, data } = useQuery(QUERY_WATCHLISTS);

  const [addMovieToWatchList] = useMutation(ADD_MOVIE_TO_WATCHLIST, {
    update(cache, { data: { addMovieToWatchList } }) {
      cache.modify({
        fields: {
          watchLists(existingWatchLists = []) {
            const newWatchListRef = cache.writeFragment({
              data: addMovieToWatchList,
              fragment: gql`
                fragment NewWatchList on WatchList {
                  _id
                  name
                  title
                }
              `,
            });
            return [...existingWatchLists, newWatchListRef];
          },
        },
      });
    },
  });

  function createList(e) {
    e.preventDefault();
    if (newList.trim() === "") {
      return alert("No List Name");
    }

    console.log("Create List");
    console.log(newList);
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
        <WatchLists
          watchLists={data.watchLists}
          addMovieToWatchList={addMovieToWatchList}
        />
      </div>
    );
  } else {
    return <Request />;
  }
}
