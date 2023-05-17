const db = require('../config/connection');
const { Profile, Character } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const characterSeeds = require('./charactersData.json');

db.once('open', async () => {
  try {
    // await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await Character.deleteMany({});
    await Character.create(characterSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});