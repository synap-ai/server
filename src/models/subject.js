const subject = (sequelize, DataTypes) => {
    const Subject = sequelize.define('subject', {
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
      gender: {
        type: DataTypes.STRING(1),
        unique:false,
        validate: {
            notEmpty: false,
        }
      },
      dob: {
        type: DataTypes.DATE,
        unique:false,
        validate: {
            notEmpty: false,
        }
      },
      dominant_hand: {
        type: DataTypes.STRING(1),
        unique:false,
        validate: {
            notEmpty: false,
        }
      },
    });
  
    Subject.associate = models => {
      Subject.hasMany(models.Session);
    };
  
    return Subject;
  };
  
  export default subject;
  