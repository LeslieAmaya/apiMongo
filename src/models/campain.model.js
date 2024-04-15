const mongoose = require("mongoose");

const campainsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
  address: {
    type: String,
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
  },
});

const Campain = mongoose.model("Campain", campainsSchema);

module.exports = Campain;
