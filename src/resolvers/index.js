import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import messageResolvers from './message';
import subjectResolvers from './subject';
import researcherResolvers from './researcher';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  messageResolvers,
  subjectResolvers,
  researcherResolvers,
];
