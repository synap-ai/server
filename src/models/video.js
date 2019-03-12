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
      allowNull: true,
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
      allowNull: true,
    },
  });

  Video.associate = models => {
    Video.belongsToMany(models.Experiment, {through: 'experiment_video_xref'});
    Video.hasMany(models.Session);
  };

  return Video;
};

export default video;
