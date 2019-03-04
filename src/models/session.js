const session = (sequelize, DataTypes) => {
  const Session = sequelize.define('session', {
    eeg_data: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      validate: { notEmpty: true },
    },
    date: {
      type: DataTypes.DATE,
      validate: { notEmpty: true },
      defaultValue: sequelize.NOW,
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
