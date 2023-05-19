import React, { useState, useEffect } from "react";

import Request from "../../components/Token/Request";
import WatchLists from "../../components/Token/WatchLists.tsx";
import Auth from "../../components/utils/auth";
import { useGetWatchlist } from "../../hooks/watchlists.js";
import { useMutation } from "@apollo/client";
import { CREATE_WATCHLIST } from "../../components/utils/mutations.js";

import "./List.css";

function Lists() {
  const [newList, setNewList] = useState("");

  const [currentList, setCurrentList] = useState([]);

  const { data, loading } = useGetWatchlist();
  const [createWatchlist] = useMutation(CREATE_WATCHLIST);

  useEffect(() => {
    if (data && !loading) {
      setCurrentList(data);
    }
  }, [data, loading]);

  console.log(currentList);
  async function createList(e) {
    e.preventDefault();
    if (newList.trim() === "") {
      return alert("No List Name");
    }
    try {
      const created = await createWatchlist({
        variables: {
          name: newList,
        },
      });
      setCurrentList([...currentList, created.data.addWatchList]);
      //console.log(created);
    } catch (error) {
      console.error("Error creating a watchlist:", error);
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
              onClick={(e) => createList(e)}
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
        {currentList && (
          <WatchLists
            watchLists={currentList}
            loading={loading}
            setCurrentList={setCurrentList}
          />
        )}
      </div>
    );
  } else {
    return <Request />;
  }
}

export default React.memo(Lists);
