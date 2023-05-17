const { gql } = require('apollo-server-express');

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

# type watchList {
#     _id: ID
#     title: String
#     description: String
#     image: String
#     link: String
#     rating: String
#     genre: String
#     year: String
#     director: String
#     actors: String
#     runtime: String
#     imdbID: String
#     type: String
#     user: String
#   }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
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