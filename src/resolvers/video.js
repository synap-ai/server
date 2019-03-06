export default {
  Query: {
    videos: async (parent, args, { models }) => {
      return await models.Video.findAll();
    },
    video: async (parent, { id }, { models }) => {
      return await models.Video.findById(id);
    },
  },

  Mutation: {
    createVideo: async (
      parent,
      { title, description, youtube_id, category },
      { models },
    ) => {
      const video = await models.Video.create({
        title,
        description,
        youtube_id,
        category,
      });

      return video;
    },

    updateVideo: async (
      parent,
      { id, title, description, youtube_id, category },
      { models },
    ) => {
      const video = await models.Video.findById(id);
      return await video.update({
        id,
        title,
        description,
        youtube_id,
        category,
      });
    },

    deleteVideo: async (parent, { id }, { models }) => {
      return await models.Video.destroy({
        where: { id },
      });
    },
  },
};
