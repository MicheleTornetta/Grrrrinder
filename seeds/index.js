const seedDogs = require('./dogSeedData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedDogs();
  console.log('\n----- DOGS SEEDED -----\n');

  process.exit(0);
};

seedAll();