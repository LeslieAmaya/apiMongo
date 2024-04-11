const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  state: {
    type: String,
    unique: true,
    required: true,
  },
});

const State = mongoose.model("State", stateSchema);

module.exports = State;
