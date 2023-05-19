import {
  ADD_MOVIE_TO_WATCHLIST,
  QUERY_WATCHLIST,
} from "../components/utils/queries";

import { useMutation, useQuery, gql } from "@apollo/client";

function useGetWatchlist() {
  const { loading, data } = useQuery(QUERY_WATCHLIST);
  return { loading, data: data?.watchLists || [] };
}

function useAddMovieToWatchlist() {
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
}

export { useGetWatchlist, useAddMovieToWatchlist };
