import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    experiments: [Experiment!]
    experiment(id: ID!): Experiment!
  }

  extend type Mutation {
    createExperiment(
      researcherId: ID!
      title: String!
      description: String
      epoch_samples: Int
      epoch_interval: Int
      uses_band_powers: Boolean
      uses_covariance: Boolean
    ): Experiment!

    updateExperiment(
      id: ID!
      title: String!
      description: String
      epoch_samples: Int
      epoch_interval: Int
      uses_band_powers: Boolean
      uses_covariance: Boolean
    ): Experiment!

    deleteExperiment(id: ID!): Boolean!
  }

  type Experiment {
    id: ID!
    researcherId: ID!
    title: String!
    description: String
    epoch_samples: Int
    epoch_interval: Int
    uses_band_powers: Boolean
    uses_covariance: Boolean
  }
`;
