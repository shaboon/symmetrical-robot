import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#characters"
          onClick={() => handlePageChange("Characters")}
          className={
            currentPage === "Characters" ? "nav-link active" : "nav-link"
          }
        >
          Characters
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#list"
          onClick={() => handlePageChange("Lists")}
          className={currentPage === "Lists" ? "nav-link active" : "nav-link"}
        >
          Lists
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#game"
          onClick={() => handlePageChange("Game")}
          className={currentPage === "Game" ? "nav-link active" : "nav-link"}
        >
          Game
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
