import React, { useState, useEffect } from "react";
import NavTabs from "../NavTabs";
import Footer from "../Footer/Footer";
import Home from "../pages/Home/Home";
import Characters from "../pages/Characters/Characters";
import Lists from "../pages/Lists/Lists";
import Game from "../pages/Game/Game";
import GalaxyBackground from "../GalaxyBackground";
import "./main.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    document.title = "Interstellar Index";
  }, []);

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
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <GalaxyBackground>{renderPage()}</GalaxyBackground>
      <Footer />
    </div>
  );
}
