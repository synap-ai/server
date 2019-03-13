import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import messageResolvers from './message';
import subjectResolvers from './subject';
import researcherResolvers from './researcher';
import experimentResolvers from './experiment';
import videoResolvers from './video';
import sessionResolvers from './session';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  messageResolvers,
  subjectResolvers,
  researcherResolvers,
  experimentResolvers,
  videoResolvers,
  sessionResolvers
];
