import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Characters from "../pages/Characters/Characters";
import Lists from "../pages/Lists/Lists";
import WatchLists from "../components/Token/WatchLists";

import Login from "../components/Token/Login";
import SignUp from "../components/Token/SignUp";

import Game from "../pages/Game/Game";
import GalaxyBackground from "../components/GalaxyBackground";
import "./main.css";

export default function InterStellarContainer() {
  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    document.title = "Interstellar Index";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="background">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <GalaxyBackground>
        <ApolloProvider client={client}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Characters" element={<Characters />} />
              <Route path="/Lists" element={<Lists />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {/* remove Once Login is functional */}
              <Route path="/Watch" element={<WatchLists />} />
              <Route path="/Game" element={<Game />} />
            </Routes>
          </Router>
        </ApolloProvider>
      </GalaxyBackground>

      <Footer />
    </div>
  );
}
