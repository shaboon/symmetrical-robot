const { Schema, model } = require("mongoose");

const watchListSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: [
    {
      type: String,
    },
  ],
});

const WatchList = model("WatchList", watchListSchema);

module.exports = WatchList;
