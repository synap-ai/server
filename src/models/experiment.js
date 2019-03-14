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
  });

  Experiment.associate = models => {
    Experiment.belongsTo(models.Researcher);
    Experiment.belongsToMany(models.Video, {through: 'experiment_video_xref'});
    Experiment.hasMany(models.Session, {onDelete: 'CASCADE'});
  };

  return Experiment;
};

export default experiment;
