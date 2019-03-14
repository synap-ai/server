export default {
  Query: {
    experiments: async (parent, args, { models }) => {
      return await models.Experiment.findAll();
    },
    experiment: async (parent, { id }, { models }) => {
      return await models.Experiment.findById(id);
    },
  },

  Mutation: {
    createExperiment: async (
      parent,
      {
        researcherId,
        title,
        description,
        videos,
      },
      { models },
    ) => {
      const experiment = await models.Experiment.create({
        researcherId,
        title,
        description,
      });
      
      for (let i = 0; i < videos.length; i++) {
        let title = videos[i].title;
        let description = videos[i].description;
        let youtube_id = videos[i].youtube_id;
        let category = videos[i].category;
        
        await models.Video.create({
          title,
          description,
          youtube_id,
          category,
        }).then((video) => {
          experiment.addVideo(video);
        });
      }

      return experiment;
    },

    updateExperiment: async (
      parent,
      {
        id,
        title,
        description,
      },
      { models },
    ) => {
      const experiment = await models.Experiment.findById(id);
      return await experiment.update({
        title,
        description,
      });
    },

    deleteExperiment: async (parent, { id }, { models }) => {
      return await models.Experiment.destroy({
        where: { id },
      });
    },
  },

  Experiment: {
    videos: async (experiment, args, { models }) => {
      return await models.Experiment.findById(experiment.id)
        .then((experiment) => {
          return experiment.getVideos()
        });
    },
  },
};
