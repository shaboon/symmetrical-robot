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
    watchLists: [watchList]!
    watchList(watchListId: ID!): watchList
    me: Profile
    characters: [Character]!
  }

  type Mutation {
    addProfile(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addWatchList(title: String!, movies: [String]): watchList
  }
`;

module.exports = typeDefs;
