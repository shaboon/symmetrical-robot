import React from "react";
import { ListData } from "./ListData";

export default function WatchLists() {
  return ListData.map((list, index) => {
    return (
      <div className="d-flex justify-content-center">
        <h1>{list.name}</h1>
        <div className="list" key={index}>
          <ul>
            {list.movies.map((movie, index) => {
              return <li key={index}>{movie}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  });
}
