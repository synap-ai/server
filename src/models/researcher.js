const researcher = (sequelize, DataTypes) => {
  const Researcher = sequelize.define('researcher', {
    first_name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    last_name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,ƒ
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [7, 42],
      },
    },
  });

  Researcher.associate = models => {
    Researcher.hasMany(models.Experiment, { onDelete: 'CASCADE' });
  };

  return Researcher;
};

export default researcher;
