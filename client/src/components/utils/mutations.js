import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $password: String!) {
    addProfile(username: $username, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const DELETE_MOVIE_MUTATION = gql`
  mutation deleteMovie($movieId: ID!) {
    deleteMovie(movieId: $movieId) {
      _id
      title
    }
  }
`;

export const ADD_TO_WATCHLIST = gql`
  mutation addToWatchList($name: String!, $title: String!) {
    addToWatchList(name: $name, title: $title) {
      _id
      name
      title
    }
  }
`;

export const REMOVE_FROM_WATCHLIST = gql`
  mutation removeFromWatchList($name: String!, $title: String!) {
    removeFromWatchList(name: $name) {
      _id
      name
      title
    }
  }
`;

export const CREATE_WATCHLIST = gql`
  mutation addWatchList($name: String!, $title: [String]) {
    addWatchList(name: $name, title: $title) {
      _id
      name
      title
    }
  }
`;

export const REMOVE_WATCHLIST = gql`
  mutation removeWatchList($name: String!) {
    removeWatchList(name: $name) {
      _id
      name
    }
  }
`;
