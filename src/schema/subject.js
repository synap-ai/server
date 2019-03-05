import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    subjects: [Subject!]
    subject(id: ID!): Subject
  }

  extend type Mutation {
    createSubject(
      first_name: String!
      last_name: String!
      email: String!
      gender: String
      dob: Date
      dominant_hand: String
    ): Subject!

    updateSubject(
      id: ID!
      first_name: String
      last_name: String
      email: String
      gender: String
      dob: Date
      dominant_hand: String
    ): Subject!
    
    deleteSubject(id: ID!): Boolean!
  }

  type Subject {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String
    dob: Date
    dominant_hand: String
  }
`;
