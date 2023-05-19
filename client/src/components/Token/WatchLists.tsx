import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_FROM_WATCHLIST, REMOVE_WATCHLIST } from "../utils/mutations";

type Props = {
  watchLists: any[],
  setCurrentList: any,
  loading: boolean;
};


// Had to convert to tsx due to issues with non-mapping of props
function WatchLists({ watchLists, setCurrentList}: Props) {

  const [removeFromWatchList] = useMutation(REMOVE_FROM_WATCHLIST);
  const [removeWatchList] = useMutation(REMOVE_WATCHLIST);
    
  console.log(watchLists);

  async function deleteFromWatchList(e, title, list) {
   e.preventDefault();
      try {
        const { data } = await removeFromWatchList({
          variables: {
            name: list,
            title: title,
          },
        });
        
      } catch (error) {
        console.error("Error deleting from watchlist:", error);
      }
 
    }

  async function deleteList(e, list) {
    try {
      const { data } = await removeWatchList({
        variables: {
          name: list,
        },
      });
      const filtered = watchLists.filter(l=> l.name !== list);
      console.log(filtered)
      setCurrentList(filtered);
    } catch (error) {
      console.error("Error removing from watchlist:", error);
    }
  }
  return watchLists.map((list, index) => {
    return (
      <div className="container col-12 row mx-auto my-2">
        <div className="container d-flex flex-column bg-secondary justify-content-center col-12 px-4 rounded single-card">
          <div className="col-12">
            <h1 className="col-12 row">{list.name}</h1>
            <div className="list col-12 row" key={index}>
              <ul className="col-8 row pb-4 mb-4">
                {list.title.map((title, index) => {
                  console.log(`List Name`, list.name)
                  return (
                    <li key={index} className="col-12">
                      <div className="container col-12 row justify-content-center list-head">
                        <button
                          value={title}
                          className="col-1 d-flex justify-content-center btn btn-danger delete"
                          onClick={(e)=> deleteFromWatchList(e, title, list.name)}
                        >
                          X
                        </button>
                        <h2 className="movie-title col-8">{title}</h2>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="col-4 button">
                <button
                  value={list.name}
                  className="col-12 btn btn-danger"
                  onClick={(e) => deleteList(e, list.name)}
                >
                  Delete WatchList
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default React.memo(WatchLists)