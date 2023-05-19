import React from "react";

type Props = {
  watchLists: any[],
};


// Had to convert to tsx due to issues with non-mapping of props
export default function WatchLists({ watchLists }: Props) {
  function deleteMovie(movie) {

  }

  function deleteList(list) {
  }
  return watchLists.map((list, index) => {
    return (
      <div className="container col-12 row mx-auto my-2">
        <div className="container d-flex flex-column bg-secondary justify-content-center col-12 px-4 rounded single-card">
          <div className="col-12">
            <h1 className="col-12 row">{list.name}</h1>
            <div className="list col-12 row" key={index}>
              <ul className="col-8 row">
                {list.title.map((title, index) => {
                  return (
                    <li key={index} className="col-12">
                      <div className="container col-12 row justify-content-center list-head">
                        <button
                          value={title}
                          className="col-1 d-flex justify-content-center btn btn-danger delete"
                          onClick={() => deleteMovie(title)}
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
                  onClick={() => deleteList(list.name)}
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
