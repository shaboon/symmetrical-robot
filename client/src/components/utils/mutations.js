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
  mutation AddToWatchList($name: String!, $title: [String]!) {
    addWatchList(title: $title, name: $name) {
      _id
      name
      title
    }
  }
`;
