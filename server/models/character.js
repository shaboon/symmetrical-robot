const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Character = mongoose.model('Character', CharacterSchema);
module.exports = Character;
