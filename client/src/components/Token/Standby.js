import React from "react";
import { useQuery } from "@apollo/client";

import WatchLists from "./WatchLists";

import { QUERY_PROFILES } from "../utils/queries";

const Standby = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <WatchLists
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Standby;
