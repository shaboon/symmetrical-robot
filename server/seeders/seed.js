const db = require("../config/connection");
const { Profile, Character, WatchList } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const characterSeeds = require("./charactersData.json");
const watchListSeeds = require("./watchListSeeds.json");

db.once("open", async () => {
  try {
    // Delete all existing documents in the Profile collection and insert new ones
    await Profile.deleteMany({});
    await Profile.insertMany(profileSeeds);

    // Delete all existing documents in the Character collection and insert new ones
    await Character.deleteMany({});
    await Character.insertMany(characterSeeds);

    // Delete all existing documents in the WatchList collection and insert new ones
    // await WatchList.deleteMany({});
    // await WatchList.insertMany(watchListSeeds);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
