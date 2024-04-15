const Campain = require("../models/campain.model");

exports.createCampain = async (req, res) => {
  try {
    const campain = new Campain(req.body);
    const savedCampain = await campain.save();
    res.json(savedCampain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCampain = async (req, res) => {
  try {
    console.log(await Campain.find());
    const campain = await Campain.find().populate("state");
    res.json(campain);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCampainById = async (req, res) => {
  try {
    const campain = await Campain.findById(req.params.id);
    if (campain == null) {
      return res.status(404).json({ message: "Campain person not found" });
    }
    res.json(campain);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCampain = async (req, res) => {
  try {
    const updatedCampain = await Campain.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCampain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCampain = async (req, res) => {
  try {
    await Campain.findByIdAndDelete(req.params.id);
    res.json({ message: "Campain person deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};
