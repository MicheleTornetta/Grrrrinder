const seedDogs = require('./dogSeedData');
const seedMeetup = require('./meetupSeedData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedDogs();
  console.log('\n----- DOGS SEEDED -----\n');

  await seedMeetup();
  console.log('\n----- MEETUPS SEEDED -----\n');

  process.exit(0);
};

seedAll();