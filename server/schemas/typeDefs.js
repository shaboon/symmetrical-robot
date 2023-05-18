const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Character {
    _id: ID
    name: String
    height: Int
    mass: Int
    gender: String
    homeworld: [String]
    species: String
    wiki: String
    image: String
    dateCreated: Int
    dateDestroyed: Int
    destroyedLocation: String
    creator: String
    manufacturer: String
    model: String
    class: String
    sensorColor: String
    platingColor: String
    born: String
    bornLocation: String
    died: String
    diedLocation: String
    hairColor: String
    eyeColor: String
    skinColor: String
    cybernetics: String
    affiliations: [String]
    masters: String
    apprentices: String
    formerAffiliations: String
    equipment: String
  }

  type watchList {
       _id: ID
       title: String
       movies: [String]
     }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    characters: [Character]!
  }

  type Mutation {
    addProfile(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addWatchList(title: String!): watchList
  }

  # type Mutation {
  #   addWatchList(title: String!,
  #    description: String!,
  #     image: String!,
  #      link: String!,
  #      rating: String!,
  #       genre: String!,
  #       year: String!,
  #        director: String!,
  #         actors: String!,
  #          runtime: String!,
  #           imdbID: String!,
  #            type: String!,
  #             user: String!):
  #              watchList
  #   removeWatchList(watchListId: ID!): watchList
  #   updateWatchList(watchListId: ID!,
  #    title: String!,
  #     description: String!,
  #      image: String!,
  #       link: String!,
  #        rating: String!,
  #         genre: String!,
  #          year: String!,
  #           director: String!,
  #            actors: String!,
  #             runtime: String!,
  #              imdbID: String!,
  #               type: String!,
  #                user: String!):
  #                 watchList
  # }
`;

module.exports = typeDefs;
