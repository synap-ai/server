import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    sessions: [Session!]
    session(id: ID!): Session
  }

  extend type Mutation {
    createSession(
      subjectId: ID!
      experimentId: ID!
      videoId: ID!
      eeg_data: [EEGInput!]!
    ): Session!

    deleteSession(id: ID!): Boolean!
  }

  type Session {
    id: ID!
    subjectId: ID!
    experimentId: ID!
    videoId: ID!
    eeg_data: [EEG!]!
  }

  input EEGInput {
    timestamp: Float!
    tp9: Float!
    af7: Float!
    af8: Float!
    tp10: Float!
  }
  
  type EEG {
    timestamp: Float!
    tp9: Float!
    af7: Float!
    af8: Float!
    tp10: Float!
  }
`;
