import {
  ADD_MOVIE_TO_WATCHLIST,
  QUERY_WATCHLIST,
} from "../components/utils/queries";

import { useMutation, useQuery, gql } from "@apollo/client";

function useGetWatchlist() {
  const { loading, data } = useQuery(QUERY_WATCHLIST);
  return { loading, data: data?.watchLists || [] };
}

export { useGetWatchlist };
