import gql from 'graphql-tag';

export const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    description: String
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    numberOfViews: Int
    modules: [Module!]!
  }

  type Module {
    id: ID!
    title: String!
    length: Int
    videoUrl: String
    content: String
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track!
    module(id: ID!): Module!
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }
`;