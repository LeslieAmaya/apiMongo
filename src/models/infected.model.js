const mongoose = require("mongoose");

const infectedSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: Boolean,
    required: true,
  },
  death: {
    type: Boolean,
    required: true,
  },
  detectionDate: {
    type: Date,
    required: true,
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
  },
});

const Infected = mongoose.model("Infected", infectedSchema);

module.exports = Infected;
