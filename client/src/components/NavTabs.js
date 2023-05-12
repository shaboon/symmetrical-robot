import React from "react";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#characters"
          onClick={() => handlePageChange("Characters")}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Characters
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#list"
          onClick={() => handlePageChange("Lists")}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Lists
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#game"
          //  TODO: Add a comment explaining what this logic is doing

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
