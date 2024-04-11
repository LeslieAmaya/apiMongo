const Infected = require("../models/infected.model");

exports.createInfected = async (req, res) => {
  try {
    const infected = new Infected(req.body);
    const savedInfected = await infected.save();
    res.json(savedInfected);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllInfected = async (req, res) => {
  try {
    const infected = await Infected.find();
    res.json(infected);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getInfectedById = async (req, res) => {
  try {
    const infected = await Infected.findById(req.params.id);
    if (infected == null) {
      return res.status(404).json({ message: "Infected person not found" });
    }
    res.json(infected);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateInfected = async (req, res) => {
  try {
    const updatedInfected = await Infected.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedInfected);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteInfected = async (req, res) => {
  try {
    await Infected.findByIdAndDelete(req.params.id);
    res.json({ message: "Infected person deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};
