import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    experiments: [Experiment!]
    experiment(id: ID!): Experiment!
  }

  extend type Mutation {
    createExperiment(text: String!): Experiment!
    deleteExperiment(id: ID!): Boolean!
  }

  type Experiment {
    id: ID!
    text: String!
    createdAt: Date!
    user: User!
  }
`;
