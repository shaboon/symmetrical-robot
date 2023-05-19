import React from "react";

function DropDown() {
  const options = ["WatchList 1", "WatchList 2", "WatchList 3"];

  return (
    <label>
      <select>
        {/* Takes option response and iterates over each  */}
        {options.map((list, index) => (
          <option key={index} value={list}>
            {list}
          </option>
        ))}
      </select>
    </label>
  );
}

export default DropDown;
