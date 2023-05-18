import React from "react";
import { ListData } from "./ListData";

// import { useMutation } from "@apollo/client";
// import { DELETE_MOVIE_MUTATION } from "../utils/mutations";

export default function WatchLists() {
  function deleteMovie(movie) {
    console.log("deleteMovie");
    console.log(movie);
  }

  function deleteList(list) {
    console.log("deleteList");
    console.log(list);
  }

  return ListData.map((list, index) => {
    return (
      <div className="container col-12 row mx-auto my-2">
        <div className="container d-flex flex-column bg-secondary justify-content-center col-12 px-4 rounded single-card">
          <div className="col-12">
            <h1 className="col-12 row">{list.name}</h1>
            <div className="list col-12 row" key={index}>
              <ul className="col-8 row">
                {list.movies.map((movie, index) => {
                  return (
                    <li key={index} className="col-12">
                      <div className="container col-12 row justify-content-center list-head">
                        <button
                          value={movie}
                          className="col-1 d-flex justify-content-center btn btn-danger delete"
                          onClick={deleteMovie(movie)}
                        >
                          X
                        </button>
                        <h2 className="movie-title col-8">{movie}</h2>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="col-4 button">
                <button
                  value={list.name}
                  className="col-12 btn btn-danger"
                  onClick={deleteList(list.name)}
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
