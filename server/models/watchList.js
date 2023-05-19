const { Schema, model } = require("mongoose");

const watchListSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: Array,
    default: [],
  },
});

const WatchList = model("WatchList", watchListSchema);

module.exports = WatchList;
