import bcrypt from 'bcrypt';

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
        notEmpty: true,
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

  Researcher.findByLogin = async login => {
    let researcher = await Researcher.findOne({
      where: { email: login },
    });
    return researcher;
  };

  Researcher.beforeCreate(async researcher => {
    researcher.password = await researcher.generatePasswordHash();
  });

  Researcher.prototype.generatePasswordHash = async function() {
    const saltRounds = 10;
    return await bcrypt.hash(this.password, saltRounds);
  };

  Researcher.prototype.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  return Researcher;
};

export default researcher;
