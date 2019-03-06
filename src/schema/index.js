import { gql } from 'apollo-server-express';

import userSchema from './user';
import messageSchema from './message';
import subjectSchema from './subject';
import researcherSchema from './researcher';
import experimentSchema from './experiment';
import videoSchema from './video'

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  userSchema,
  messageSchema,
  subjectSchema,
  researcherSchema,
  experimentSchema,
  videoSchema,
];
