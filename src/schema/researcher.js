import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    researchers: [Researcher!]
    researcher(id: ID!): Researcher
    me: Researcher
  }

  extend type Mutation {
    signUp(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): Token!

    signIn(login: String!, password: String!): Token!

    updateResearcher(
      id: ID!
      first_name: String
      last_name: String
      email: String
    ): Researcher!
    
    deleteResearcher(id: ID!): Boolean!
  }
  
  type Token {
    token: String!
  }

  type Researcher {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    experiments: [Experiment!] 
  }
`;
