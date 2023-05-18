import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item">
        <a
          href="/"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/Characters"
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
          href="/Lists"
          onClick={() => handlePageChange("Lists")}
          className={currentPage === "Lists" ? "nav-link active" : "nav-link"}
        >
          Lists
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/Game"
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
