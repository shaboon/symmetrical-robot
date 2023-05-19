import { useQuery } from "@apollo/client";
import { QUERY_WATCHLIST } from "../utils/queries";

export default function useWatchlist() {
  const { loading, data } = useQuery(QUERY_WATCHLIST);

  return {
    loading,
    data,
  };
}
