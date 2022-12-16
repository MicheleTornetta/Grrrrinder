const seedDogs = require('./dogSeedData');
const seedOwner = require('./ownerSeedData')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedOwner();
  console.log('\n----- OWNERS SEEDED -----\n');
  await seedDogs();
  console.log('\n----- DOGS SEEDED -----\n');

  process.exit(0);
};

seedAll();