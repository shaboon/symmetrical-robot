import React from "react";
import { ListData } from "./ListData";

export default function WatchLists() {
  return ListData.map((list, index) => {
    return (
      <div className="container d-flex flex-column justify-content-center col-12 col-xl-4">
        <div className="col-12 row">
          <h1 className="col-12 row">{list.name}</h1>
        </div>
        <div className="list col-12 row" key={index}>
          <ul className="col-12 row">
            {list.movies.map((movie, index) => {
              return (
                <li key={index} className="col-12">
                  <h2 className="">{movie}</h2>
                  <button className="btn btn-primary">
                    Remove From Watchlist
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
}
