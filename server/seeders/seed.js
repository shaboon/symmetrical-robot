const db = require('../config/connection');
const { Profile, Character } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const characterSeeds = require('./charactersData.json');

db.once('open', async () => {
  try {
    // Delete all existing documents in the Profile collection and insert new ones
    await Profile.deleteMany({});
    await Profile.insertMany(profileSeeds);

    // Delete all existing documents in the Character collection and insert new ones
    await Character.deleteMany({});
    await Character.insertMany(characterSeeds);

    console.log('All done!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
