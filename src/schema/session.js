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
      eeg_data: [EEG!]!
      date: Date!
    ): Session!

    deleteSession(id: ID!): Boolean!
  }

  type Session {
    id: ID!
    subjectId: ID!
    experimentId: ID!
    videoId: ID!
    eeg_data: [EEG!]!
    date: Date!
  }

  type EEG {
    timestamp: Int!
    tp9: Int!
    fp1: Int!
    fp2: Int!
    tp10: Int!
  }
`;
