const { Schema, model } = require("mongoose");

const watchListSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  movies: {
    type: Array,
    default: [],
  },
});

const WatchList = model("WatchList", watchListSchema);

module.exports = WatchList;
