const sequelize = require("../config/connection");
const { User, Character } = require("../models");

const userData = require("./userData.json");
const charactersData = require("./charactersData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const character of charactersData) {
    await Character.create({
      ...character,
    });
  }

  process.exit(0);
};

seedDatabase();