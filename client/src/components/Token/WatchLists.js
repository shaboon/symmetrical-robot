import React from "react";
import { ListData } from "./ListData";

export default function WatchLists() {
  return ListData.map((list, index) => {
    return (
      <div className="container row">
        <div className="container d-flex flex-column justify-content-center col-8 col-xl-4">
          <div className="col-12 row">
            <h1 className="col-8 row">{list.name}</h1>
            <button className="col-4">Delete WatchList</button>
          </div>
          <div className="list col-12 row" key={index}>
            <ul className="col-12 row">
              {list.movies.map((movie, index) => {
                return (
                  <li key={index} className="col-12">
                    <div className="container row justify-content-center list-head">
                      <h2 className="movie-title col-12">{movie}</h2>
                    </div>
                    <button className="btn btn-primary">
                      Remove From Watchlist
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  });
}
