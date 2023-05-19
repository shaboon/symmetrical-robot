import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      username
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  query getCharacters {
    characters {
      _id
      name
      image
      wiki
      born
      died
      species
      affiliations
    }
  }
`;

export const QUERY_WATCHLIST = gql`
  query getWatchLists {
    watchLists {
      _id
      name
      title
    }
  }
`;

export const ADD_MOVIE_TO_WATCHLIST = gql`
  mutation addMovieToWatchList($watchListId: ID!, $title: String!) {
    addMovieToWatchList(watchListId: $watchListId, title: $title) {
      _id
      name
      title
    }
  }
`;
