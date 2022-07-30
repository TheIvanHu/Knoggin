const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RaceSchema = new Schema({
  charactersPerMinute: {
    type: Number,
    required: true,
    default: 0,
  },
  accuracy: {
    type: Number,
    required: true,
    default: 0,
  },
  time: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = Race = mongoose.model("race", RaceSchema);
