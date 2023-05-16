import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Characters from "../pages/Characters/Characters";
import Lists from "../pages/Lists/Lists";
import Game from "../pages/Game/Game";
import GalaxyBackground from "../components/GalaxyBackground";
import "./main.css";

export default function InterStellarContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    document.title = "Interstellar Index";
  }, []);

  const renderPage = () => {
    if (currentPage === "Home") {
      return window.location.replace("/");
    }
    if (currentPage === "Characters") {
      return window.location.replace("/Characters");
    }
    if (currentPage === "Lists") {
      return window.location.replace("/Lists");
    }
    return window.location.replace("/Game");
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="background">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <GalaxyBackground>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Lists" element={<Lists />} />
            <Route path="/Game" element={<Game />} />
          </Routes>
        </Router>
      </GalaxyBackground>

      <Footer />
    </div>
  );
}
