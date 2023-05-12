import React, { useState, useEffect } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Lists from "./pages/Lists";
import Game from "./pages/Game";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    document.title = "Interstellar Index";
  }, []);

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Characters") {
      return <Characters />;
    }
    if (currentPage === "Lists") {
      return <Lists />;
    }
    return <Game />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
