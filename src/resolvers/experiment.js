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
        epoch_samples,
        epoch_interval,
        uses_band_powers,
        uses_covariance,
      },
      { models },
    ) => {
      const experiment = await models.Experiment.create({
        researcherId,
        title,
        description,
        epoch_samples,
        epoch_interval,
        uses_band_powers,
        uses_covariance,
      });

      return experiment;
    },

    updateExperiment: async (
      parent,
      {
        id,
        title,
        description,
        epoch_samples,
        epoch_interval,
        uses_band_powers,
        uses_covariance,
      },
      { models },
    ) => {
      const experiment = await models.Experiment.findById(id);
      return await experiment.update({
        title,
        description,
        epoch_samples,
        epoch_interval,
        uses_band_powers,
        uses_covariance,
      });
    },

    deleteExperiment: async (parent, { id }, { models }) => {
      return await models.Experiment.destroy({
        where: { id },
      });
    },
  },
};
