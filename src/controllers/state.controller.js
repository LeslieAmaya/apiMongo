const State = require("../models/state.model");

exports.getAllStates = async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
