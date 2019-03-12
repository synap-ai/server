import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    videos: [Video!]
    video(id: ID!): Video
  }

  extend type Mutation {
    createVideo(
      title: String!
      description: String
      youtube_id: String!
      category: String
    ): Video!

    updateVideo(
      id: ID!
      title: String
      description: String
      youtube_id: String
      category: String
    ): Video!

    deleteVideo(id: ID!): Boolean!
  }

  type Video {
    id: ID!
    title: String!
    description: String
    youtube_id: String!
    category: String
  }
  
  input VideoInput {
    title: String!
    description: String
    youtube_id: String!
    category: String
  }
`;
