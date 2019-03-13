const session = (sequelize, DataTypes) => {
  const Session = sequelize.define('session', {
    eeg_data: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      validate: { notEmpty: true },
    },
  });

  Session.associate = models => {
    Session.belongsTo(models.Subject);
    Session.belongsTo(models.Experiment);
    Session.belongsTo(models.Video);
  };

  return Session;
};

export default session;
