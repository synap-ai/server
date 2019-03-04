const video = (sequelize, DataTypes) => {
  const Video = sequelize.define('video', {
    title: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING(1000),
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
        ƒ,
      },
    },
    youtube_id: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Video.associate = models => {
    Video.hasMany(models.Experiment, {through: 'experiment_video_xref'});
    Experiment.hasMany(models.Session);
  };

  return Video;
};

export default video;
