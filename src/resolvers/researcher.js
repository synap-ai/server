import jwt from 'jsonwebtoken';
import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';

const createToken = async (researcher, secret, expiresIn) => {
  const { id, first_name, last_name, email } = researcher;
  return await jwt.sign(
    { id, first_name, last_name, email },
    secret,
    {
      expiresIn,
    },
  );
};

export default {
  Query: {
    researchers: async (parent, args, { models }) => {
      return await models.Researcher.findAll();
    },
    researcher: async (parent, { id }, { models }) => {
      return await models.Researcher.findById(id);
    },
    me: async (parent, args, { models, me }) => {
      if (!me) {
        return null;
      }

      return await models.Researcher.findById(me.id);
    }
  },

  Mutation: {
    signUp: async (
      parent,
      { first_name, last_name, email, password },
      { models, secret },
    ) => {
      const researcher = await models.Researcher.create({
        first_name,
        last_name,
        email,
        password,
      });

      return { token: createToken(researcher, secret, '30m') };
    },

    signIn: async (
      parent,
      { login, password },
      { models, secret },
    ) => {
      const researcher = await models.Researcher.findByLogin(login);

      if (!researcher) {
        throw new UserInputError(
          'No researcher found with this login credentials.',
        );
      }

      const isValid = await researcher.validatePassword(password);

      if (!isValid) {
        throw new AuthenticationError('Invalid password.');
      }

      return { token: createToken(researcher, secret, '30m') };
    },

    updateResearcher: async (
      parent,
      { id, first_name, last_name, email },
      { models },
    ) => {
      const researcher = await models.Researcher.findById(id);
      return await researcher.update({
        first_name,
        last_name,
        email,
      });
    },

    deleteResearcher: async (parent, { id }, { models }) => {
      return await models.Researcher.destroy({
        where: { id },
      });
    },
  },

  Researcher: {
    experiments: async (researcher, args, { models }) => {
      return await models.Experiment.findAll({
        where: {
          researcherId: researcher.id,
        },
      });
    },
  },
};
