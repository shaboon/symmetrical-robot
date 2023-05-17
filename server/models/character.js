const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
name: {
    type: String,
  },
  height: {
    type: Number,
  },
  mass: {
    type: Number,
  },
  gender: {
    type: String,
  },
  homeworld: {
    type: Array,
  },
  species: {
    type: String,
  },
  wiki: {
    type: String,
  },
  image: {
    type: String,
  },
  dateCreated: {
    type: Number,
  },
  dateDestroyed: {
    type: Number,
  },
  destroyedLocation: {
    type: String,
  },
  creator: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  model: {
    type: String,
  },
  class: {
    type: String,
  },
  sensorColor: {
    type: String,
  },
  platingColor: {
    type: String,
  },
  born: {
    type: String,
  },
  bornLocation: {
    type: String,
  },
  died: {
    type: Number,
  },
  diedLocation: {
    type: String,
  },
  species: {
    type: String,
  },
  hairColor: {
    type: String,
  },
  eyeColor: {
    type: String,
  },
  skinColor: {
    type: String,
  },
  cybernetics: {
    type: Array,
  },
  affiliations: {
    type: Array,
  },
  masters: {
    type: Array,
  },
  apprentices: {
    type: Array,
  },
  formerAffiliations: {
    type: Array,
  },
  appearances: {
    type: Array,
  },
});


const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
