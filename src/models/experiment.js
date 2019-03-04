const experiment = (sequelize, DataTypes) => {
  const Experiment = sequelize.define('experiment', {
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    description: {
      type: DataTypes.STRING(1000),
      validate: { notEmpty: false },
    },
    epoch_samples: {
      type: DataTypes.Integer,
      validate: { notEmpty: false },
      defaultValue: 255,
    },
    epoch_interval: {
      type: DataTypes.Integer,
      validate: { notEmpty: false },
      defaultValue: 100,
    },
    uses_band_powers: {
      type: DataTypes.BOOLEAN,
      validate: { notEmpty: false },
      defaultValue: true,
    },
    uses_covariance: {
      type: DataTypes.BOOLEAN,
      validate: { notEmpty: false },
      defaultValue: true,
    },
  });

  Experiment.associate = models => {
    Experiment.belongsTo(models.Researcher);
    Experiment.hasMany(models.Video, {through: 'experiment_video_xref'});
    Experiment.hasMany(models.Session, {onDelete: 'CASCADE'});
  };

  return Experiment;
};

export default experiment;
