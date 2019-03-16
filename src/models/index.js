import Sequelize from 'sequelize';

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
  });
} else {
  sequelize = new Sequelize(
    process.env.TEST_DATABASE || process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
      logging: function(x) { 
        let message = x.toString();
        let length = message.length;
        if (length < 1000) {
          console.log(message); 
        } else {
          message = message.slice(0 , 1000);
          console.log(message, '...');
        }
      }, 
    },
  );
}

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
  Researcher: sequelize.import('./researcher'),
  Experiment: sequelize.import('./experiment'),
  Video: sequelize.import('./video'),
  Session: sequelize.import('./session'),
  Subject: sequelize.import('./subject'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
