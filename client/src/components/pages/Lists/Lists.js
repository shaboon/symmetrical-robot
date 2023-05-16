import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Request from "./Token/Request/Request";
import Standby from "./Token/Standby/Standby";
import Login from "./Token/Login/Login";
import SignUp from "./Token/SignUp/SignUp";
import Profile from "./Token/Profile/Profile";

export default function Lists() {
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

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Request />
          <div className="container">
            <Routes>
              <Route path="/" element={<Standby />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/profiles/:profileId" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}
