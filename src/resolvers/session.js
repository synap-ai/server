export default {
  Query: {
    sessions: async (parent, args, { models }) => {
      return await models.Session.findAll();
    },
    session: async (parent, { id }, { models }) => {
      return await models.Session.findById(id);
    },
  },

  Mutation: {
    createSession: async (
      parent,
      { subjectId, experimentId, videoId, eeg_data, date },
      { models },
    ) => {
      const session = await models.Session.create({
        subjectId,
        experimentId,
        videoId,
        eeg_data,
        date,
      });

      return session;
    },

    deleteSession: async (parent, { id }, { models }) => {
      return await models.Session.destroy({
        where: { id },
      });
    },
  },
};
