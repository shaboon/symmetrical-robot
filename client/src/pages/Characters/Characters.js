import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

//... other imports

import "./Character.css";

// Define the mutation
const ADD_TO_WATCHLIST = gql`
  mutation AddToWatchlist($movie: String!, $watchlist: String!) {
    addToWatchlist(movie: $movie, watchlist: $watchlist) {
      // The fields here should match those in your schema
    }
  }
`;

export default function Characters() {
  const [movie, setMovie] = useState();
  const [watchList, setWatchList] = useState();
  const [addToWatchlist, { data }] = useMutation(ADD_TO_WATCHLIST);

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };

  const handleWatchListChange = (event) => {
    setWatchList(event.target.value);
  };

  function addToWatchList(e) {
    e.preventDefault();

    addToWatchlist({
      variables: {
        movie: movie,
        watchlist: watchList,
      },
    })
      .then(response => {
        // You can handle the response here if needed
        console.log(response.data);
      })
      .catch(error => {
        // Make sure to handle errors
        console.error(error);
      });
  }

  // ... other existing code, including the render method
}
