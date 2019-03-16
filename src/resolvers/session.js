export default {
  Query: {
    sessions: async (parent, args, { models }) => {
      return await models.Session.findAll();
    },
    session: async (parent, { id }, { models }) => {
      return await models.Session.findById(id);
    },
    getSession: async (parent, { sId, eId, vId }, {models}) => {
      let result = await models.Session.findAll({
        limit: 1,
        where: {
          subjectId: sId,
          experimentId: eId,
          videoId: vId,
        },
        order: [['createdAt', 'DESC']]
      });

      return result[0];

    }
  },

  Mutation: {
    createSession: async (
      parent,
      { subjectId, experimentId, videoId, eeg_data },
      { models },
    ) => {
      const session = await models.Session.create({
        subjectId,
        experimentId,
        videoId,
        eeg_data,
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
