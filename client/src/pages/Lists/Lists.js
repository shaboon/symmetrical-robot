import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Request from "../../components/Token/Request";
import Standby from "../../components/Token/Standby";
import Login from "../../components/Token/Login";
import SignUp from "../../components/Token/SignUp";
import Profile from "../../components/Token/Profile";

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
      <div className="flex-column justify-flex-start min-100-vh">
        <Request />
        <div className="container">
          <Routes>
            <Route path="/" element={<Standby />} />
            <Route path="/Lists/login" element={<Login />} />
            <Route path="/Lists/signup" element={<SignUp />} />
            <Route path="/Lists/me" element={<Profile />} />
            <Route path="/Lists/profiles/:profileId" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </ApolloProvider>
  );
}
