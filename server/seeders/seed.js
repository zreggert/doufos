const db = require('../config/connection');
const { User, Sighting } = require('../models');
const userSeeds = require('./userSeeds.json');
const sightingSeeds = require('../../client/src/sightingData.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Sighting.deleteMany({});
    await User.create(userSeeds);
    await Sighting.create(sightingSeeds);


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

