import React from "react";
import { ListData } from "./ListData";

export default function WatchLists() {
  {
    ListData.map((list, index) => {
      return (
        <div className="d-flex justify-content-center">
          <div className="list" key={index}></div>
        </div>
      );
    });
  }
}
